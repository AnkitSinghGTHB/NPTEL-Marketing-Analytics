import os
import re
import json
from pypdf import PdfReader

def parse_mock_exams(directory):
    questions_data = []
    
    for filename in sorted(os.listdir(directory)):
        if filename.endswith(".pdf") and filename.startswith("mock_exam"):
            filepath = os.path.join(directory, filename)
            reader = PdfReader(filepath)
            text = ""
            for page in reader.pages:
                text += page.extract_text() + "\n"
                
            # Parse questions and answers from text
            # The structure is usually Q1. ... A) ... B) ... C) ... D) ... Answer Key at the bottom
            
            # Extract Answer Key
            answer_key = {}
            if "Answer Key" in text:
                key_section = text.split("Answer Key")[-1]
                for line in key_section.split("\n"):
                    match = re.match(r"(\d+):\s*([A-D])", line.strip())
                    if match:
                        q_num, ans = match.groups()
                        answer_key[q_num] = ans

            # Extract Questions
            # Split by Q\d+\. 
            parts = re.split(r"(Q\d+\.)", text)
            
            current_q = None
            for i in range(1, len(parts), 2):
                q_label = parts[i].strip() # "Q1."
                q_num = re.search(r"\d+", q_label).group()
                q_content = parts[i+1].strip()
                
                # We need to stop at Answer Key if it's the last question
                if "Answer Key" in q_content:
                    q_content = q_content.split("Answer Key")[0].strip()
                
                # Find options
                # Options usually start with A), B), C), D)
                options_match = re.finditer(r"\n([A-D])\)", q_content)
                opt_indices = []
                for m in options_match:
                    opt_indices.append((m.group(1), m.start()))
                
                if len(opt_indices) == 4:
                    question_text = q_content[:opt_indices[0][1]].strip()
                    options_dict = {}
                    for j in range(4):
                        start = opt_indices[j][1] + 3 # Skip 'A) '
                        end = opt_indices[j+1][1] if j < 3 else len(q_content)
                        # Remove Source / Difficulty from the last option
                        opt_text = q_content[start:end].strip()
                        if j == 3:
                            if "Source:" in opt_text:
                                opt_text = opt_text.split("Source:")[0].strip()
                        options_dict[opt_indices[j][0]] = opt_text
                        
                    # Build options array
                    options_array = [
                        options_dict.get('A', ''),
                        options_dict.get('B', ''),
                        options_dict.get('C', ''),
                        options_dict.get('D', '')
                    ]
                    
                    correct_letter = answer_key.get(q_num, "A")
                    correct_answer = options_dict.get(correct_letter, "")
                    
                    # Convert "[Week X]" to "[Mock Exam X]" or something similar if needed, or just "[Mock]"
                    mock_num = re.search(r"\d+", filename).group()
                    clean_question = f"[Mock Exam {mock_num}] {question_text}"
                    
                    questions_data.append({
                        "question": clean_question,
                        "options": options_array,
                        "correctAnswer": correct_answer,
                        "explanation": f"Source: Mock Exam {mock_num}",
                        "mock_file": filename
                    })
                    
    with open(os.path.join(directory, "parsed_mocks.json"), "w", encoding="utf-8") as f:
        json.dump(questions_data, f, indent=2)
        
    with open(os.path.join(directory, "parsed_mocks.md"), "w", encoding="utf-8") as f:
        for q in questions_data:
            f.write(f"### {q['question']}\n")
            for idx, opt in enumerate(q['options']):
                letter = chr(65 + idx)
                f.write(f"- {letter}) {opt}\n")
            f.write(f"**Answer:** {q['correctAnswer']}\n\n")
            
    print(f"Extracted {len(questions_data)} questions.")

if __name__ == "__main__":
    parse_mock_exams(".")
