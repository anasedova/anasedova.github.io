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
</style>

- Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal \
**Anastasiia Sedova**, Lena Zellinger, Benjamin Roth \
ECML PKDD 2023 \
[paper](https://arxiv.org/pdf/2306.04502)
- <a href="javascript:addAbstract(actc_abstract)">.bibtex</a>
<a href="javascript:copyCitation(agra_citation, agra_citation_text)">.bibtex</a>

- ACTC: Active Threshold Calibration for Cold-Start Knowledge Graph Completion \
**Anastasiia Sedova**, Benjamin Roth \
ACL 2023 \
[paper](https://arxiv.org/pdf/2305.06395)
<a href="javascript:copyCitation(actc_citation, actc_citation_text)">.bibtex</a>

- Knodle: Modular Weakly Supervised Learning with PyTorch \
**Anastasiia Sedova**, Andreas Stephan, Marina Speranskaya, Benjamin Roth \
RepL4NLP @ ACL 2021 \
[paper](https://arxiv.org/pdf/2104.11557)
<a href="javascript:copyCitation(knodle_citation, knodle_citation_text)">.bibtex</a>

- Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions \
**Anastasiia Sedova**, Olga Mitrofanova \
IMS 2017 \
<a href="javascript:copyCitation(topic_modeling_lemmata_citation, topic_modeling_lemmata_citation_text)">.bibtex</a>

- Topic Modelling in Parallel and Comparable Fiction Texts (the case study of English and Russian prose) \
Olga Mitrofanova, **Anastasiia Sedova** \
ITCL 2017 \
[paper](https://dl.acm.org/doi/abs/10.1145/3143699.3143734)
<a href="javascript:copyCitation(topic_modeling_comparable_citation, topic_modeling_comparable_citation_text)">.bibtex</a>
