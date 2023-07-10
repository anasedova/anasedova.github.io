src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"

function copyCitation(citation, citation_text) {
  navigator.clipboard.writeText(citation);
  swal({
    text: 'The citation is copied to the clipboard: \n\n' + citation_text
})
}

function addAbstract(abstract, paper_name) {
  swal({
    title: paper_name,
    text: abstract
  })

}

var actc_abstract = 'Self-supervised knowledge-graph completion (KGC) relies on estimating a scoring model over (entity, relation, entity)-tuples, for exam- ple, by embedding an initial knowledge graph. Prediction quality can be improved by calibrat- ing the scoring model, typically by adjusting the prediction thresholds using manually anno- tated examples. In this paper, we attempt for the first time cold-start calibration for KGC, where no annotated examples exist initially for calibration, and only a limited number of tuples can be selected for annotation.' +
    'Our new method ACTC finds good per-relation thresholds efficiently based on a limited set of annotated tuples. Additionally to a few anno- tated tuples, ACTC also leverages unlabeled tuples by estimating their correctness with Lo- gistic Regression or Gaussian Process classi- fiers. We also experiment with different meth- ods for selecting candidate tuples for annota- tion: density-based and random selection. Ex- periments with five scoring models and an or- acle annotator show an improvement of 7% points when using ACTC in the challenging setting with an annotation budget of only 10 tu- ples, and an average improvement of 4% points over different budgets.';

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
    ' &emsp; title = "{ACTC}: Active Threshold Calibration for Cold-Start Knowledge Graph Completion",\n ' +
    ' &emsp; author = "Sedova, Anastasiia  and Roth, Benjamin", \n' +
    ' &emsp; booktitle = "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers)",\n' +
    ' &emsp; month = jul,\n' +
    ' &emsp; year = "2023",\n' +
    ' &emsp; address = "Toronto, Canada",\n' +
    ' &emsp; publisher = "Association for Computational Linguistics",\n' +
    ' &emsp; url = "https://aclanthology.org/2023.acl-short.158",\n' +
    ' &emsp; pages = "1853--1863"}';

var agra_abstract = "An accurate and substantial dataset is essential for training a reliable and well-performing model. However, even manually annotated datasets contain label errors, not to mention automatically labeled ones. Previous methods for label denoising have primarily focused on detecting outliers and their permanent removal – a process that is likely to over- or underfilter the dataset. In this work, we propose AGRA: a new method for learning with noisy labels by using Adaptive GRAdient-based outlier removal1. Instead of cleaning the dataset prior to model training, the dataset is dynamically adjusted during the training process. By compar- ing the aggregated gradient of a batch of samples and an individual exam- ple gradient, our method dynamically decides whether a corresponding example is helpful for the model at this point or is counter-productive and should be left out for the current update. Extensive evaluation on sev- eral datasets demonstrates AGRA’s effectiveness, while a comprehensive results analysis supports our initial hypothesis: permanent hard outlier removal is not always what model benefits the most from."

var agra_citation = "@misc{sedova2023learning," +
    "title={Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal}," +
    "author={Anastasiia Sedova and Lena Zellinger and Benjamin Roth}," +
    "year={2023}," +
    "eprint={2306.04502}," +
    "archivePrefix={arXiv}," +
    "primaryClass={cs.LG}}";

var agra_citation_text = "@misc{sedova2023learning,\n" +
    " &emsp; title={Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal}, \n" +
    " &emsp; author={Anastasiia Sedova and Lena Zellinger and Benjamin Roth},\n" +
    " &emsp; year={2023},\n" +
    " &emsp; eprint={2306.04502},\n" +
    " &emsp; archivePrefix={arXiv},\n" +
    " &emsp; primaryClass={cs.LG} \n }";

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
    " &emsp; author={Anastasiia Sedova and Andreas Stephan and Marina Speranskaya and Benjamin Roth}, \n" +
    " &emsp; title={Knodle: Modular Weakly Supervised Learning with PyTorch},\n" +
    " &emsp; booktitle={Proceedings of the 6th Workshop on Representation Learning for NLP, RepL4NLP@ACL-IJCNLP 2021, Online, August 6, 2021},\n" +
    " &emsp; pages={100--111},\n " +
    " &emsp; publisher={Association for Computational Linguistics},\n" +
    " &emsp; year={2021},\n" +
    " &emsp; url={https://doi.org/10.18653/v1/2021.repl4nlp-1.12},\n" +
    " &emsp; doi={10.18653/v1/2021.repl4nlp-1.12} \n }";

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
    " &emsp; author= {Anastasiya Sedova and Olga Mitrofanova}, \n" +
    " &emsp; title= {Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions}, \n" +
    " &emsp; booktitle= {XX International Conference 'Internet and Modern Society': Computer" +
    " &emsp; Linguistics and Computing Ontologies, {IMS} {CLCO} 2017, St. Petersburg, Russia, June 21-23, 2017}, \n" +
    " &emsp; pages={132--144}, \n" +
    " &emsp; publisher={ITMO University}, \n" +
    " &emsp; year={2017}, \n" +
    " &emsp; url={https://doi.org/10.17586/2541-9781-2017-1-132-144}, \n" +
    " &emsp; doi={10.17586/2541-9781-2017-1-132-144}, \n" +
    " &emsp; timestamp={Wed, 10 Mar 2021 10:49:24 +0100},\n" +
    " &emsp; biburl={https://dblp.org/rec/conf/ims2/SedovaM17.bib},\n" +
    " &emsp; bibsource={dblp computer science bibliography, https://dblp.org} \n }";

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
    " &emsp; author = {Mitrofanova, Olga and Sedova, Anastasiia}, \n" +
    " &emsp; title = {Topic Modelling in Parallel and Comparable Fiction Texts (the Case Study of English and Russian Prose)}, \n" +
    " &emsp; year = {2017}, \n" +
    " &emsp; isbn = {9781450354370}, \n" +
    " &emsp; publisher = {Association for Computing Machinery}, \n" +
    " &emsp; address = {New York, NY, USA}, \n" +
    " &emsp; url = {https://doi.org/10.1145/3143699.3143734}, \n" +
    " &emsp; doi = {10.1145/3143699.3143734}, \n" +
    " &emsp; booktitle = {Proceedings of the International Conference IMS-2017},  \n" +
    " &emsp; pages = {175–180},  \n" +
    " &emsp; numpages = {6}, \n" +
    " &emsp; keywords = {Topic Modelling, Fiction, Text Corpora, English, Russian, Parallel and Comparable Texts}, \n" +
    " &emsp; location = {Saint Petersburg, Russian Federation}, \n" +
    " &emsp; series = {IMS2017} \n }";
