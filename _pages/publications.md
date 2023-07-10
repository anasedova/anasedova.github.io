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

<script type = "text/javascript">  
    function copyCitation(citation) {
      navigator.clipboard.writeText(citation);
      alert("The citation is copied to the clipboard" + citation);
    }
</script>

- Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal \
**Anastasiia Sedova**, Lena Zellinger, Benjamin Roth \
ECML PKDD 2023 \
[paper](https://arxiv.org/pdf/2306.04502) <button onclick="copyCitation(AGRA citation)">copy citation in .bibtex</button>

- ACTC: Active Threshold Calibration for Cold-Start Knowledge Graph Completion \
**Anastasiia Sedova**, Benjamin Roth \
ACL 2023 \
[paper](https://arxiv.org/pdf/2305.06395) [citation](http://anasedova.github.io/_publications/paper_1.html)

- Knodle: Modular Weakly Supervised Learning with PyTorch \
**Anastasiia Sedova**, Andreas Stephan, Marina Speranskaya, Benjamin Roth \
ACL (RepL4NLP) 2021 \
[paper](https://arxiv.org/pdf/2104.11557)

- Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions \
**Anastasiia Sedova**, Olga Mitrofanova \
IMS 2017

- Topic Modelling in Parallel and Comparable Fiction Texts (the case study of English and Russian prose)
Olga Mitrofanova, **Anastasiia Sedova** \
ITCL 2017 \
[paper](https://dl.acm.org/doi/abs/10.1145/3143699.3143734)

