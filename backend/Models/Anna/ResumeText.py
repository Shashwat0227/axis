# Import required library.
import pdfplumber

# Open the file and create a pdf object.
def extract_text(resume_path):
    pdf = pdfplumber.open(resume_path)

    # Get the number of pages.
    numPages = len(pdf.pages)

    print("Number of Pages:", numPages)
    str_ret = ""
    # Iterate over each page and extract the text of each page.
    for number, pageText in enumerate(pdf.pages):
        str_ret += pageText
    return str_ret

# import fitz
# from unidecode import unidecode

# def resume_blocks():
#     my_path = "PATH_TO_YOUR_AWESOME_RESUME_PDF"
#     doc = fitz.open(my_path)
#     output = []
#     out_blocks = []
#     for page in doc:
#         output += page.get_text("blocks")
#     previous_block_id = 0 # Set a variable to mark the block id
#     for block in output:
#         if block[6] == 0: # We only take the text
#             if previous_block_id != block[5]: # Compare the block number 
#                 print("\n")
#             plain_text = unidecode(block[4])
#             print(plain_text)
#             out_blocks.append(plain_text)
#     return out_blocks

# from pyresparser import ResumeParser
# import nltk
# nltk.download("stopwords")
# pdf_file_path = r"C:\Users\annad\OneDrive\Desktop\Dheeraj Anna"
# data = ResumeParser(pdf_file_path).get_extracted_data()

# import spacy

# # Load pre-trained spaCy model
# nlp = spacy.load('en_core_web_sm')

# # Process the text
# resume_text = "My name is Dheeraj Anna. I am applying for the role of design analyst. I am well-acquainted with the skills of Kotlin, Swift, React.js, Web Development, and Android App development"
# doc = nlp(resume_text)
# # Extract entities
# for entity in doc.ents:
#     print(entity.text, entity.label_)