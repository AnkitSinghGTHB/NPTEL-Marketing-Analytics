import json
import os
import re

quiz_dir = r"c:\Users\ankit\Downloads\NPTEL Marketing Analytics\Quiz_App"
questions_js_path = os.path.join(quiz_dir, "questions.js")

with open(questions_js_path, "r", encoding="utf-8") as f:
    content = f.read()

json_str = content.replace("const quizQuestions = ", "").strip()
if json_str.endswith(";"):
    json_str = json_str[:-1]

all_qs = json.loads(json_str)

bs_patterns2 = [
    r"latest .* version mentioned",
    r"names of the two individuals involved",
    r"plan to cover in a few sessions",
    r"instructor suggest regarding memorization",
    r"specific file \(.*\) does the instructor open",
    r"at the time of recording",
    r"what does the instructor .* recommend",
    r"why does the instructor recommend",
    r"what distinguishes the rstudio .* as perceived by the instructor",
    r"the instructor mentions that .* what is",
    r"instructor plan to cover",
    r"mentioned by the instructor",
    r"what is meant by .* as mentioned in the lecture"
]

filtered_qs = []
removed_qs = []

for q in all_qs:
    q_text = q["question"].lower()
    is_bs = False
    
    for p in bs_patterns2:
        if re.search(p, q_text):
            is_bs = True
            break
            
    if is_bs:
        removed_qs.append(q["question"])
    else:
        filtered_qs.append(q)

with open(questions_js_path, "w", encoding="utf-8") as f:
    f.write("const quizQuestions = ")
    json.dump(filtered_qs, f, indent=2)
    f.write(";")

print(f"Removed additional {len(removed_qs)} BS questions.")
print(f"Total questions remaining: {len(filtered_qs)}")
