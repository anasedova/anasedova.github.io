---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---


<div id="popup" style="display: none;">{{ post.citation }}<br><button onclick="copyToClipboard()" class=".btn">Copy to Clipboard</button></div>
<script type = "text/javascript">  
    function showPopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "block";
    }

    function copyToClipboard() {
      var popupContent = document.getElementById("popup").innerText;
      var textarea = document.createElement("textarea");
      textarea.value = popupContent;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  </script>

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="../files/publications_utils.js"></script>

<style>
    .swal-modal {
      width: 800px;
    }
    .swal-text {
        font-size: 18px;
        padding: 30px;
        line-height: 27px;
        text-align: justify;
        margin-top: 1px;
    }
    .swal-title{
        font-size: 28px;
        padding: 30px;
        margin-bottom: 1px;
    }
</style>

- _Behavioral Testing: Can Large Language Models Implicitly Resolve Ambiguous Entities?_ \
**Anastasiia Sedova**, Robert Litschko, Diego Frassinelli, Benjamin Roth, Barbara Plank \
ArXiv preprint \
[paper](https://arxiv.org/pdf/2407.17125)

- _Analysing zero-shot temporal relation extraction on clinical notes using temporal consistency_ \
Vasiliki Kougia, **Anastasiia Sedova**, Andreas Stephan, Benjamin Roth \
BioNLP @ACL 2024 \
[paper](https://arxiv.org/abs/2406.11486)

- _Exploring prompts to elicit memorization in masked language model-based named entity recognition_  \
Yuxi Xia, **Anastasiia Sedova**, Pedro Henrique Luz de Araujo, Vasiliki Kougia, Lisa Nußbaumer, Benjamin Roth \
ArXiv preprint \
[paper](https://arxiv.org/pdf/2405.03004)

- _ULF: Unsupervised Labeling Function Correction using Cross-Validation for Weak Supervision_ \
**Anastasiia Sedova**, Benjamin Roth \
EMNLP 2023 \
[paper](https://arxiv.org/pdf/2204.06863)
<a href="javascript:addAbstract(ulf_abstract, 'ULF: Unsupervised Labeling Function Correction using Cross-Validation for Weak Supervision')">abstract</a>
<a href="javascript:copyCitation(ulf_citation, ulf_citation_text)">.bibtex</a>

- _ACTC: Active Threshold Calibration for Cold-Start Knowledge Graph Completion_ \
**Anastasiia Sedova**, Benjamin Roth \
ACL 2023 \
[paper](https://aclanthology.org/2023.acl-short.158.pdf)
<a href="javascript:addAbstract(actc_abstract, 'ACTC: Active Threshold Calibration for Cold-Start Knowledge Graph Completion')">abstract</a>
<a href="javascript:copyCitation(actc_citation, actc_citation_text)">.bibtex</a>

- _Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal_ \
**Anastasiia Sedova**, Lena Zellinger, Benjamin Roth \
ECML PKDD 2023 \
[paper](https://arxiv.org/pdf/2306.04502)
<a href="javascript:addAbstract(agra_abstract, 'Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal')">abstract</a>
<a href="javascript:copyCitation(agra_citation, agra_citation_text)">.bibtex</a>

- _Knodle: Modular Weakly Supervised Learning with PyTorch_ \
**Anastasiia Sedova**, Andreas Stephan, Marina Speranskaya, Benjamin Roth \
RepL4NLP @ ACL 2021 \
[paper](https://aclanthology.org/2021.repl4nlp-1.12.pdf)
<a href="javascript:addAbstract(knodle_abstract, 'Knodle: Modular Weakly Supervised Learning with PyTorch')">abstract</a>
<a href="javascript:copyCitation(knodle_citation, knodle_citation_text)">.bibtex</a>

- _Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions_ \
**Anastasiia Sedova**, Olga Mitrofanova \
IMS 2017 \
<a href="javascript:copyCitation(topic_modeling_lemmata_citation, topic_modeling_lemmata_citation_text)">.bibtex</a>

- _Topic Modelling in Parallel and Comparable Fiction Texts (the case study of English and Russian prose)_ \
Olga Mitrofanova, **Anastasiia Sedova** \
ITCL 2017 \
[paper](https://dl.acm.org/doi/abs/10.1145/3143699.3143734)
<a href="javascript:addAbstract(topic_modeling_comparable_abstract, 'Topic Modelling in Parallel and Comparable Fiction Texts (the case study of English and Russian prose)')">abstract</a>
<a href="javascript:copyCitation(topic_modeling_comparable_citation, topic_modeling_comparable_citation_text)">.bibtex</a>
