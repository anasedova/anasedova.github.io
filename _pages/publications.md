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
      alert("The citation is copied to the clipboard: \n\n" + citation);
    }
    var actc_citation = "@misc{sedova2023actc, \n
      title={ACTC: Active Threshold Calibration for Cold-Start Knowledge Graph Completion}, \n
      author={Anastasiia Sedova and Benjamin Roth}, \n
      year={2023}, \n
      eprint={2305.06395}, \n
      archivePrefix={arXiv}, \n
      primaryClass={cs.LG}\n }";

    var agra_citation = "@misc{sedova2023learning,\n
      title={Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal}, \n
      author={Anastasiia Sedova and Lena Zellinger and Benjamin Roth},\n
      year={2023},\n
      eprint={2306.04502},\n
      archivePrefix={arXiv},\n
      primaryClass={cs.LG}\n}";

    var knodle_citation = "@inproceedings{DBLP:conf/rep4nlp/SedovaSSR21,
        author={Anastasiia Sedova and Andreas Stephan and Marina Speranskaya and Benjamin Roth}, \n
        title={Knodle: Modular Weakly Supervised Learning with PyTorch},\n
        booktitle={Proceedings of the 6th Workshop on Representation Learning for NLP, RepL4NLP@ACL-IJCNLP 2021,
                    Online, August 6, 2021},\n
        pages={100--111},\n
        publisher={Association for Computational Linguistics},\n
        year={2021},\n
        url={https://doi.org/10.18653/v1/2021.repl4nlp-1.12},\n
        doi={10.18653/v1/2021.repl4nlp-1.12}}";
</script>

- Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal \
**Anastasiia Sedova**, Lena Zellinger, Benjamin Roth \
ECML PKDD 2023 \
[paper](https://arxiv.org/pdf/2306.04502)
<a href="javascript:copyCitation(agra_citation)">.bibtex</a>

- ACTC: Active Threshold Calibration for Cold-Start Knowledge Graph Completion \
**Anastasiia Sedova**, Benjamin Roth \
ACL 2023 \
[paper](https://arxiv.org/pdf/2305.06395)
<a href="javascript:copyCitation(actc_citation)">.bibtex</a>

- Knodle: Modular Weakly Supervised Learning with PyTorch \
**Anastasiia Sedova**, Andreas Stephan, Marina Speranskaya, Benjamin Roth \
RepL4NLP @ ACL 2021 \
[paper](https://arxiv.org/pdf/2104.11557)
<a href="javascript:copyCitation(knodle_citation)">.bibtex</a>

- Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions \
**Anastasiia Sedova**, Olga Mitrofanova \
IMS 2017

- Topic Modelling in Parallel and Comparable Fiction Texts (the case study of English and Russian prose)
Olga Mitrofanova, **Anastasiia Sedova** \
ITCL 2017 \
[paper](https://dl.acm.org/doi/abs/10.1145/3143699.3143734)

