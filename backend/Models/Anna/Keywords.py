import spacy
import pytextrank
def keyword_extractor(text, keywords):
    # example text
    # load a spaCy model, depending on language, scale, etc.
    nlp = spacy.load("en_core_web_sm")
    # add PyTextRank to the spaCy pipeline
    nlp.add_pipe("textrank")
    doc = nlp(text)
    # examine the top-ranked phrases in the document
    return_list = []
    for phrase in doc._.phrases[:keywords]:
        return_list.append(phrase.text)
    return return_list
# keyword_extractor("How are you doing guys? This week has been dedicated to the learning of computer architectures like RISC and CISC and more for a holistic network formulation.", 7)