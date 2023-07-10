src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"

function copyCitation(citation, citation_text) {
  navigator.clipboard.writeText(citation);
  swal({
    text: 'The citation is copied to the clipboard: \n\n' + citation_text
})
}

var actc_citation = '@inproceedings{sedova-roth-2023-actc,' +
    'title = "{ACTC}: Active Threshold Calibration for Cold-Start Knowledge Graph Completion",' +
    'author = "Sedova, Anastasiia  and Roth, Benjamin",' +
    'booktitle = "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers)",' +
    'month = jul,' +
    'year = "2023",' +
    'address = "Toronto, Canada",' +
    'publisher = "Association for Computational Linguistics",' +
    'url = "https://aclanthology.org/2023.acl-short.158",' +
    'pages = "1853--1863"}';

var actc_citation_text = '@inproceedings{sedova-roth-2023-actc, \n ' +
    '\t title = "{ACTC}: Active Threshold Calibration for Cold-Start Knowledge Graph Completion",\n ' +
    '\t author = "Sedova, Anastasiia  and Roth, Benjamin", \n' +
    '\t booktitle = "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers)",\n' +
    '\t month = jul,\n' +
    '\t year = "2023",\n' +
    '\t address = "Toronto, Canada",\n' +
    '\t publisher = "Association for Computational Linguistics",\n' +
    '\t url = "https://aclanthology.org/2023.acl-short.158",\n' +
    '\t pages = "1853--1863"}';

var agra_citation = "@misc{sedova2023learning," +
    "title={Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal}," +
    "author={Anastasiia Sedova and Lena Zellinger and Benjamin Roth}," +
    "year={2023}," +
    "eprint={2306.04502}," +
    "archivePrefix={arXiv}," +
    "primaryClass={cs.LG}}";

var agra_citation_text = "@misc{sedova2023learning,\n" +
    "\t title={Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal}, \n" +
    "\t author={Anastasiia Sedova and Lena Zellinger and Benjamin Roth},\n" +
    "\t year={2023},\n" +
    "\t eprint={2306.04502},\n" +
    "\t archivePrefix={arXiv},\n" +
    "\t primaryClass={cs.LG} \n }";

var knodle_citation = "@inproceedings{DBLP:conf/rep4nlp/SedovaSSR21," +
    "author={Anastasiia Sedova and Andreas Stephan and Marina Speranskaya and Benjamin Roth}," +
    "title={Knodle: Modular Weakly Supervised Learning with PyTorch}," +
    "booktitle={Proceedings of the 6th Workshop on Representation Learning for NLP, RepL4NLP@ACL-IJCNLP 2021, Online, August 6, 2021}," +
    "pages={100--111}," +
    "publisher={Association for Computational Linguistics}," +
    "year={2021}," +
    "url={https://doi.org/10.18653/v1/2021.repl4nlp-1.12}," +
    "doi={10.18653/v1/2021.repl4nlp-1.12}}";

var knodle_citation_text = "@inproceedings{DBLP:conf/rep4nlp/SedovaSSR21,  \n" +
    "\t author={Anastasiia Sedova and Andreas Stephan and Marina Speranskaya and Benjamin Roth}, \n" +
    "\t title={Knodle: Modular Weakly Supervised Learning with PyTorch},\n" +
    "\t booktitle={Proceedings of the 6th Workshop on Representation Learning for NLP, RepL4NLP@ACL-IJCNLP 2021, Online, August 6, 2021},\n" +
    "\t pages={100--111},\n " +
    "\t publisher={Association for Computational Linguistics},\n" +
    "\t year={2021},\n" +
    "\t url={https://doi.org/10.18653/v1/2021.repl4nlp-1.12},\n" +
    "\t doi={10.18653/v1/2021.repl4nlp-1.12} \n }";

var topic_modeling_lemmata_citation = "@inproceedings{DBLP:conf/ims2/SedovaM17," +
    "author= {Anastasiya Sedova and Olga Mitrofanova}," +
    "title= {Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions}," +
    "booktitle= {XX International Conference 'Internet and Modern Society': Computer Linguistics and Computing Ontologies, {IMS} {CLCO} 2017, St. Petersburg, Russia, June 21-23, 2017}," +
    "pages={132--144}," +
    "publisher={ITMO University}," +
    "year={2017}," +
    "url={https://doi.org/10.17586/2541-9781-2017-1-132-144}," +
    "doi={10.17586/2541-9781-2017-1-132-144}," +
    "timestamp={Wed, 10 Mar 2021 10:49:24 +0100}," +
    "biburl={https://dblp.org/rec/conf/ims2/SedovaM17.bib}," +
    "bibsource={dblp computer science bibliography, https://dblp.org}}";

var topic_modeling_lemmata_citation_text = "@inproceedings{DBLP:conf/ims2/SedovaM17, \n" +
    "\t author= {Anastasiya Sedova and Olga Mitrofanova}, \n" +
    "\t title= {Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions}, \n" +
    "\t booktitle= {XX International Conference 'Internet and Modern Society': Computer" +
    "\t Linguistics and Computing Ontologies, {IMS} {CLCO} 2017, St. Petersburg, Russia, June 21-23, 2017}, \n" +
    "\t pages={132--144}, \n" +
    "\t publisher={ITMO University}, \n" +
    "\t year={2017}, \n" +
    "\t url={https://doi.org/10.17586/2541-9781-2017-1-132-144}, \n" +
    "\t doi={10.17586/2541-9781-2017-1-132-144}, \n" +
    "\t timestamp={Wed, 10 Mar 2021 10:49:24 +0100},\n" +
    "\t biburl={https://dblp.org/rec/conf/ims2/SedovaM17.bib},\n" +
    "\t bibsource={dblp computer science bibliography, https://dblp.org} \n }";

var topic_modeling_comparable_citation = "@inproceedings{10.1145/3143699.3143734" +
    "author = {Mitrofanova, Olga and Sedova, Anastasiia}," +
    "title = {Topic Modelling in Parallel and Comparable Fiction Texts (the Case Study of English and Russian Prose)}," +
    "year = {2017}," +
    "isbn = {9781450354370}, " +
    "publisher = {Association for Computing Machinery}," +
    "address = {New York, NY, USA}," +
    "url = {https://doi.org/10.1145/3143699.3143734}," +
    "doi = {10.1145/3143699.3143734}," +
    "abstract = {The paper is devoted to processing parallel and comparable corpora by means of topic modelling. We focus our attention on Russian and English parallel and comparable texts. We use Latent Dirichlet Allocation (LDA) algorithm for building topic models of fiction texts, evaluation of compatibility for the original text and its translation(s), selection of possible translation equivalents.}," +
    "booktitle = {Proceedings of the International Conference IMS-2017}," +
    "pages = {175–180}," +
    "numpages = {6}," +
    "keywords = {Topic Modelling, Fiction, Text Corpora, English, Russian, Parallel and Comparable Texts}," +
    "location = {Saint Petersburg, Russian Federation}," +
    "series = {IMS2017}}";

var topic_modeling_comparable_citation_text = "@inproceedings{10.1145/3143699.3143734, \n" +
    "\t author = {Mitrofanova, Olga and Sedova, Anastasiia}, \n" +
    "\t title = {Topic Modelling in Parallel and Comparable Fiction Texts (the Case Study of English and Russian Prose)}, \n" +
    "\t year = {2017}, \n" +
    "\t isbn = {9781450354370}, \n" +
    "\t publisher = {Association for Computing Machinery}, \n" +
    "\t address = {New York, NY, USA}, \n" +
    "\t url = {https://doi.org/10.1145/3143699.3143734}, \n" +
    "\t doi = {10.1145/3143699.3143734}, \n" +
    "\t booktitle = {Proceedings of the International Conference IMS-2017},  \n" +
    "\t pages = {175–180},  \n" +
    "\t numpages = {6}, \n" +
    "\t keywords = {Topic Modelling, Fiction, Text Corpora, English, Russian, Parallel and Comparable Texts}, \n" +
    "\t location = {Saint Petersburg, Russian Federation}, \n" +
    "\t series = {IMS2017} \n }";
