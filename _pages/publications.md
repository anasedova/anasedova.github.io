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

<script type = "text/javascript">

    function copyCitation(citation, citation_text) {
      navigator.clipboard.writeText(citation);
      swal({
        text: 'The citation is copied to the clipboard: \n\n' + citation_text,
        width: '800px'
    })
    }

    var actc_citation = '@inproceedings{sedova-roth-2023-actc,
        title = "{ACTC}: Active Threshold Calibration for Cold-Start Knowledge Graph Completion",
        author = "Sedova, Anastasiia  and Roth, Benjamin",
        booktitle = "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers)",
        month = jul,
        year = "2023",
        address = "Toronto, Canada",
        publisher = "Association for Computational Linguistics",
        url = "https://aclanthology.org/2023.acl-short.158",
        pages = "1853--1863"}';

    var actc_citation_text = '@inproceedings{sedova-roth-2023-actc, \n
        title = "{ACTC}: Active Threshold Calibration for Cold-Start Knowledge Graph Completion",\n
        author = "Sedova, Anastasiia  and Roth, Benjamin",\n
        booktitle = "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers)",\n
        month = jul,\n
        year = "2023",\n
        address = "Toronto, Canada",\n
        publisher = "Association for Computational Linguistics",\n
        url = "https://aclanthology.org/2023.acl-short.158",\n
        pages = "1853--1863"}';

    var agra_citation = "@misc{sedova2023learning,
      title={Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal},
      author={Anastasiia Sedova and Lena Zellinger and Benjamin Roth},
      year={2023},
      eprint={2306.04502},
      archivePrefix={arXiv},
      primaryClass={cs.LG}}";

    var agra_citation_text = "@misc{sedova2023learning,\n
      title={Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal}, \n
      author={Anastasiia Sedova and Lena Zellinger and Benjamin Roth},\n
      year={2023},\n
      eprint={2306.04502},\n
      archivePrefix={arXiv},\n
      primaryClass={cs.LG} \n }";

    var knodle_citation = "@inproceedings{DBLP:conf/rep4nlp/SedovaSSR21,
        author={Anastasiia Sedova and Andreas Stephan and Marina Speranskaya and Benjamin Roth},
        title={Knodle: Modular Weakly Supervised Learning with PyTorch},
        booktitle={Proceedings of the 6th Workshop on Representation Learning for NLP, RepL4NLP@ACL-IJCNLP 2021,
                    Online, August 6, 2021},
        pages={100--111},
        publisher={Association for Computational Linguistics},
        year={2021},
        url={https://doi.org/10.18653/v1/2021.repl4nlp-1.12},
        doi={10.18653/v1/2021.repl4nlp-1.12}}";

    var knodle_citation_text = "@inproceedings{DBLP:conf/rep4nlp/SedovaSSR21,
        author={Anastasiia Sedova and Andreas Stephan and Marina Speranskaya and Benjamin Roth}, \n
        title={Knodle: Modular Weakly Supervised Learning with PyTorch},\n
        booktitle={Proceedings of the 6th Workshop on Representation Learning for NLP, RepL4NLP@ACL-IJCNLP 2021,
                    Online, August 6, 2021},\n
        pages={100--111},\n
        publisher={Association for Computational Linguistics},\n
        year={2021},\n
        url={https://doi.org/10.18653/v1/2021.repl4nlp-1.12},\n
        doi={10.18653/v1/2021.repl4nlp-1.12} \n }";

    var topic_modeling_lemmata_citation = "@inproceedings{DBLP:conf/ims2/SedovaM17,
        author= {Anastasiya Sedova and Olga Mitrofanova},
        title= {Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions},
        booktitle= {XX International Conference 'Internet and Modern Society': Computer
                          Linguistics and Computing Ontologies, {IMS} {CLCO} 2017, St. Petersburg,
                          Russia, June 21-23, 2017},
        pages={132--144},
        publisher={ITMO University},
        year={2017},
        url={https://doi.org/10.17586/2541-9781-2017-1-132-144},
        doi={10.17586/2541-9781-2017-1-132-144},
        timestamp={Wed, 10 Mar 2021 10:49:24 +0100},
        biburl={https://dblp.org/rec/conf/ims2/SedovaM17.bib},
        bibsource={dblp computer science bibliography, https://dblp.org}}";

    var topic_modeling_lemmata_citation_text = "@inproceedings{DBLP:conf/ims2/SedovaM17, \n
        author= {Anastasiya Sedova and Olga Mitrofanova}, \n
        title= {Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions}, \n
        booktitle= {XX International Conference 'Internet and Modern Society': Computer
                          Linguistics and Computing Ontologies, {IMS} {CLCO} 2017, St. Petersburg,
                          Russia, June 21-23, 2017}, \n
        pages={132--144}, \n
        publisher={ITMO University}, \n
        year={2017}, \n
        url={https://doi.org/10.17586/2541-9781-2017-1-132-144}, \n
        doi={10.17586/2541-9781-2017-1-132-144}, \n
        timestamp={Wed, 10 Mar 2021 10:49:24 +0100},\n
        biburl={https://dblp.org/rec/conf/ims2/SedovaM17.bib},\n
        bibsource={dblp computer science bibliography, https://dblp.org} \n }";

    var topic_modeling_comparable_citation = "@inproceedings{10.1145/3143699.3143734,
        author = {Mitrofanova, Olga and Sedova, Anastasiia},
        title = {Topic Modelling in Parallel and Comparable Fiction Texts (the Case Study of English and Russian Prose)},
        year = {2017},
        isbn = {9781450354370},
        publisher = {Association for Computing Machinery},
        address = {New York, NY, USA},
        url = {https://doi.org/10.1145/3143699.3143734},
        doi = {10.1145/3143699.3143734},
        abstract = {The paper is devoted to processing parallel and comparable corpora by means of topic modelling. We focus our attention on Russian and English parallel and comparable texts. We use Latent Dirichlet Allocation (LDA) algorithm for building topic models of fiction texts, evaluation of compatibility for the original text and its translation(s), selection of possible translation equivalents.},
        booktitle = {Proceedings of the International Conference IMS-2017},
        pages = {175–180},
        numpages = {6},
        keywords = {Topic Modelling, Fiction, Text Corpora, English, Russian, Parallel and Comparable Texts},
        location = {Saint Petersburg, Russian Federation},
        series = {IMS2017}}";

    var topic_modeling_comparable_citation_text = "@inproceedings{10.1145/3143699.3143734, \n
        author = {Mitrofanova, Olga and Sedova, Anastasiia}, \n
        title = {Topic Modelling in Parallel and Comparable Fiction Texts (the Case Study of English and Russian Prose)}, \n
        year = {2017}, \n
        isbn = {9781450354370}, \n
        publisher = {Association for Computing Machinery}, \n
        address = {New York, NY, USA}, \n
        url = {https://doi.org/10.1145/3143699.3143734}, \n
        doi = {10.1145/3143699.3143734}, \n
        booktitle = {Proceedings of the International Conference IMS-2017},  \n
        pages = {175–180},  \n
        numpages = {6}, \n
        keywords = {Topic Modelling, Fiction, Text Corpora, English, Russian, Parallel and Comparable Texts}, \n
        location = {Saint Petersburg, Russian Federation}, \n
        series = {IMS2017} \n }";
</script>

- Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal \
**Anastasiia Sedova**, Lena Zellinger, Benjamin Roth \
ECML PKDD 2023 \
[paper](https://arxiv.org/pdf/2306.04502)
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
