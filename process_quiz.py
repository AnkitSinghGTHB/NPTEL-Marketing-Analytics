import json
import os
import re

def process_and_filter():
    mock_dir = r"c:\Users\ankit\Downloads\NPTEL Marketing Analytics\Mock Exam"
    quiz_dir = r"c:\Users\ankit\Downloads\NPTEL Marketing Analytics\Quiz_App"
    exam_prep_dir = r"c:\Users\ankit\Downloads\NPTEL Marketing Analytics\Exam_Prep"
    
    with open(os.path.join(mock_dir, "parsed_mocks.json"), "r", encoding="utf-8") as f:
        mock_qs = json.load(f)

    # 1. Append to Exam Prep MD files
    # Distribute Mock 1->Mod 1, Mock 2->Mod 2, Mock 3->Mod 3, Mock 4&5->Mod 4
    md_files = [
        "Module_1_Basics_Conjoint_Clustering.md",
        "Module_2_Pricing_Sales_Analytics.md",
        "Module_3_Recommender_MarketBasket.md",
        "Module_4_CRM_TextMining_SNA.md"
    ]
    
    mock_groups = {"1": [], "2": [], "3": [], "4": [], "5": []}
    for q in mock_qs:
        num = re.search(r"mock_exam_(\d+)", q["mock_file"]).group(1)
        mock_groups[num].append(q)
        
    def append_to_md(md_filename, mock_nums):
        path = os.path.join(exam_prep_dir, md_filename)
        if not os.path.exists(path): return
        with open(path, "a", encoding="utf-8") as f:
            for num in mock_nums:
                f.write(f"\n\n## Mock Exam {num} Questions\n\n")
                for q in mock_groups[num]:
                    f.write(f"**Q: {q['question']}**\n")
                    for opt in q['options']:
                        if opt: f.write(f"- {opt}\n")
                    f.write(f"**Answer:** {q['correctAnswer']}\n\n")

    append_to_md(md_files[0], ["1"])
    append_to_md(md_files[1], ["2"])
    append_to_md(md_files[2], ["3"])
    append_to_md(md_files[3], ["4", "5"])

    # 2. Read questions.js
    questions_js_path = os.path.join(quiz_dir, "questions.js")
    with open(questions_js_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract JSON part
    json_str = content.replace("const quizQuestions = ", "").strip()
    if json_str.endswith(";"):
        json_str = json_str[:-1]
    
    try:
        all_qs = json.loads(json_str)
    except json.JSONDecodeError as e:
        print("Error decoding questions.js JSON:", e)
        # Try to fix by finding the array
        start = content.find("[")
        end = content.rfind("]") + 1
        all_qs = json.loads(content[start:end])

    # 3. Add Mock Questions
    # Check if they are already added to prevent duplicates
    existing_q_texts = set([q["question"] for q in all_qs])
    new_qs_added = 0
    for mq in mock_qs:
        if mq["question"] not in existing_q_texts:
            all_qs.append(mq)
            new_qs_added += 1

    # 4. Filter "BS" questions
    # A BS question requires context from the lecture to answer, not conceptual.
    bs_patterns = [
        r"which hotel chain",
        r"in the initial comparison",
        r"case study, what did",
        r"in the .* case study",
        r"Dr\. Swagato",
        r"shown in the lecture",
        r"in the video, what",
        r"as per the video",
        r"what was the primary reason for the hotel chain's struggle",
        r"which of the following is NOT a primary reason .* as discussed in the lecture",
        r"what is the name of the",
        r"in the redwoods case study",
        r"in the coca-cola case study",
        r"according to the instructor, what",
        r"as mentioned by the instructor",
        r"as seen in the lecture",
        r"in the example shown",
        r"the lecturer states that",
        r"in the presentation"
    ]
    
    # But keep conceptual ones even if they mention lecturer (e.g., "The lecturer mentions... what does this imply")
    keep_patterns = [
        r"what does this imply",
        r"what does it mean",
        r"conceptually",
        r"concept",
        r"how does",
        r"why is",
        r"what is the primary advantage"
    ]
    
    filtered_qs = []
    removed_qs = []
    
    for q in all_qs:
        q_text = q["question"].lower()
        
        is_bs = False
        for p in bs_patterns:
            if re.search(p, q_text):
                is_bs = True
                break
                
        # Some questions just ask "What did the lecturer say about X?" -> BS
        # "According to the lecture, what is..." -> Often BS unless it's a general definition
        if "according to the lecture" in q_text and not any(re.search(kp, q_text) for kp in keep_patterns):
            # Might be BS if it's very specific, but let's be careful.
            # Let's remove if it explicitly asks about the lecture context.
            pass
            
        # specifically "in the lecture" + "which" + "NOT"
        if "in the lecture" in q_text and "not" in q_text:
             is_bs = True
             
        # "What was the latest R version mentioned in the lecture" -> BS
        if "latest r version mentioned" in q_text: is_bs = True
        
        # "Which institution does Dr. Swagato Chatterjee represent?" -> BS
        if "swagato" in q_text: is_bs = True
        
        # If it's a BS candidate, check if it's actually conceptual
        if is_bs:
            is_conceptual = False
            for kp in keep_patterns:
                if re.search(kp, q_text):
                    is_conceptual = True
                    break
            if is_conceptual:
                is_bs = False
                
        if is_bs:
            removed_qs.append(q["question"])
        else:
            filtered_qs.append(q)

    # 5. Write back to questions.js
    with open(questions_js_path, "w", encoding="utf-8") as f:
        f.write("const quizQuestions = ")
        json.dump(filtered_qs, f, indent=2)
        f.write(";")

    print(f"Added {new_qs_added} mock questions.")
    print(f"Removed {len(removed_qs)} context-dependent (BS) questions.")
    print(f"Total questions remaining: {len(filtered_qs)}")

if __name__ == "__main__":
    process_and_filter()
