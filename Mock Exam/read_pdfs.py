import urllib.request
import os
import sys
import subprocess

def install_and_import(package):
    try:
        __import__(package)
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])

install_and_import('pypdf')
from pypdf import PdfReader

def read_pdf(file_path):
    reader = PdfReader(file_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

if __name__ == "__main__":
    pdf_path = "mock_exam_1.pdf"
    if os.path.exists(pdf_path):
        text = read_pdf(pdf_path)
        print("--- EXTRACTED TEXT ---")
        print(text[:1500])
    else:
        print("File not found:", pdf_path)
