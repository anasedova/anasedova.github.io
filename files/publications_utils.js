src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"

function copyCitation(citation, citation_text) {
  navigator.clipboard.writeText(citation_text);
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

var actc_abstract = 'Self-supervised knowledge-graph completion (KGC) relies on estimating a scoring model over ' +
    '(entity, relation, entity)-tuples, for example, by embedding an initial knowledge graph. Prediction quality can ' +
    'be improved by calibrating the scoring model, typically by adjusting the prediction thresholds using manually ' +
    'annotated examples. In this paper, we attempt for the first time cold-start calibration for KGC, where no annotated' +
    'examples exist initially for calibration, and only a limited number of tuples can be selected for annotation.' +
    'Our new method ACTC finds good per-relation thresholds efficiently based on a limited set of annotated tuples. ' +
    'Additionally to a few annotated tuples, ACTC also leverages unlabeled tuples by estimating their correctness ' +
    'with Logistic Regression or Gaussian Process classifiers. We also experiment with different methods for ' +
    'selecting candidate tuples for annotation: density-based and random selection. Experiments with five scoring ' +
    'models and an oracle annotator show an improvement of 7% points when using ACTC in the challenging setting with an' +
    'annotation budget of only 10 tuples, and an average improvement of 4% points over different budgets.';

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
    ' \t title = "{ACTC}: Active Threshold Calibration for Cold-Start Knowledge Graph Completion",\n ' +
    ' \t author = "Sedova, Anastasiia  and Roth, Benjamin", \n' +
    ' \t booktitle = "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers)",\n' +
    ' \t month = jul,\n' +
    ' \t year = "2023",\n' +
    ' \t address = "Toronto, Canada",\n' +
    ' \t publisher = "Association for Computational Linguistics",\n' +
    ' \t url = "https://aclanthology.org/2023.acl-short.158",\n' +
    ' \t pages = "1853--1863"}';


var to_know_abstract = 'One of the major aspects contributing to the striking performance of large language ' +
    'models (LLMs) is the vast amount of factual knowledge accumulated during pre-training. Yet, many LLMs suffer from ' +
    'self-inconsistency, which raises doubts about their trustworthiness and reliability. This paper focuses on entity ' +
    'type ambiguity, analyzing the proficiency and con- sistency of state-of-the-art LLMs in applying factual knowledge ' +
    'when prompted with am- biguous entities. To do so, we propose an eval- uation protocol that disentangles knowing ' +
    'from applying knowledge, and test state-of-the-art LLMs on 49 ambiguous entities. Our experi- ments reveal that ' +
    'LLMs struggle with choos- ing the correct entity reading, achieving an av- erage accuracy of only 85%, and as low ' +
    'as 75% with underspecified prompts. The results also reveal systematic discrepancies in LLM behavior, showing ' +
    'that while the models may possess knowledge, they struggle to apply it consistently, exhibit biases toward ' +
    'preferred readings, and display self-inconsistencies. This highlights the need to address entity ambiguity in ' +
    'the future for more trustworthy LLMs.';

var to_know_citation = '@inproceedings{sedova-etal-2024-know, ' +
    'title = "To Know or Not To Know? Analyzing Self-Consistency of Large Language Models under Ambiguity",' +
    'author = "Sedova, Anastasiia and Litschko, Robert and Frassinelli, Diego and Roth, Benjamin and Plank, Barbara",' +
    'editor = "Al-Onaizan, Yaser and Bansal, Mohit and Chen, Yun-Nung",' +
    'booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2024",' +
    'month = nov,' +
    'year = "2024",' +
    'address = "Miami, Florida, USA",' +
    'publisher = "Association for Computational Linguistics",' +
    'url = "https://aclanthology.org/2024.findings-emnlp.1003",' +
    'pages = "17203--17217"}';

var to_know_citation_text = '@inproceedings{sedova-etal-2024-know, \n ' +
    ' \t title = "To Know or Not To Know? Analyzing Self-Consistency of Large Language Models under Ambiguity",\n' +
    ' \t author = "Sedova, Anastasiia and Litschko, Robert and Frassinelli, Diego and Roth, Benjamin and Plank, Barbara",\n' +
    ' \t editor = "Al-Onaizan, Yaser and Bansal, Mohit and Chen, Yun-Nung",\n' +
    ' \t booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2024",\n' +
    ' \t month = nov,\n' +
    ' \t year = "2024",\n' +
    ' \t address = "Miami, Florida, USA",\n' +
    ' \t publisher = "Association for Computational Linguistics",\n' +
    ' \t url = "https://aclanthology.org/2024.findings-emnlp.1003",\n' +
    ' \t pages = "17203--17217"}';


var agra_abstract = "An accurate and substantial dataset is essential for training a reliable and " +
    "well-performing model. However, even manually annotated datasets contain label errors, not to mention " +
    "automatically labeled ones. Previous methods for label denoising have primarily focused on detecting outliers and " +
    "their permanent removal – a process that is likely to over- or underfilter the dataset. In this work, we propose " +
    "AGRA: a new method for learning with noisy labels by using Adaptive GRAdient-based outlier removal. Instead of " +
    "cleaning the dataset prior to model training, the dataset is dynamically adjusted during the training process. " +
    "By comparing the aggregated gradient of a batch of samples and an individual example gradient, our method " +
    "dynamically decides whether a corresponding example is helpful for the model at this point or is " +
    "counter-productive and should be left out for the current update. Extensive evaluation on several datasets " +
    "demonstrates AGRA’s effectiveness, while a comprehensive results analysis supports our initial hypothesis: " +
    "permanent hard outlier removal is not always what model benefits the most from.";

var agra_citation = "@misc{sedova2023learning," +
    "title={Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal}," +
    "author={Anastasiia Sedova and Lena Zellinger and Benjamin Roth}," +
    "year={2023}," +
    "eprint={2306.04502}," +
    "archivePrefix={arXiv}," +
    "primaryClass={cs.LG}}";

var agra_citation_text = "@misc{sedova2023learning,\n" +
    " \t title={Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal}, \n" +
    " \t author={Anastasiia Sedova and Lena Zellinger and Benjamin Roth},\n" +
    " \t year={2023},\n" +
    " \t eprint={2306.04502},\n" +
    " \t archivePrefix={arXiv},\n" +
    " \t primaryClass={cs.LG} \n }";

var ulf_abstract = "A cost-effective alternative to manual data labeling is weak supervision (WS), where data " +
    "samples are automatically annotated using a predefined set of labeling functions (LFs), rule-based mechanisms " +
    "that generate artificial labels for the associated classes. In this work, we investigate noise reduction " +
    "techniques for WS based on the principle of k-fold cross-validation. We introduce a new algorithm ULF for " +
    "Unsupervised Labeling Function correction, which denoises WS data by leveraging models trained on all but some " +
    "LFs to identify and correct biases specific to the held-out LFs. Specifically, ULF refines the allocation of LFs " +
    "to classes by re-estimating this assignment on highly reliable cross-validated samples. Evaluation on multiple " +
    "datasets confirms ULF's effectiveness in enhancing WS learning without the need for manual labeling"

var ulf_citation = "@misc{sedova2022ulf," +
    "      title={ULF: Unsupervised Labeling Function Correction using Cross-Validation for Weak Supervision}," +
    "      author={Anastasiia Sedova and Benjamin Roth}," +
    "      year={2022}," +
    "      eprint={2204.06863}," +
    "      archivePrefix={arXiv}," +
    "      primaryClass={cs.LG}" +
    "}"

var ulf_citation_text = "@misc{sedova2022ulf,\n" +
    "      title={ULF: Unsupervised Labeling Function Correction using Cross-Validation for Weak Supervision}, \n" +
    "      author={Anastasiia Sedova and Benjamin Roth},\n" +
    "      year={2022},\n" +
    "      eprint={2204.06863},\n" +
    "      archivePrefix={arXiv},\n" +
    "      primaryClass={cs.LG}\n" +
    "}"

var knodle_abstract = "Strategies for improving the training and prediction quality of weakly supervised " +
    "machine learning models vary in how much they are tailored to a specific task or integrated with a specific model " +
    "architecture. In this work, we introduce Knodle, a software framework that treats weak data annotations, deep " +
    "learning models, and methods for improving weakly supervised training as separate, modular components. " +
    "This modularization gives the training process access to fine-grained information such as data set characteristics," +
    "matches of heuristic rules, or elements of the deep learning model ultimately used for prediction. " +
    "Hence, our framework can encompass a wide range of training methods for improving weak supervision, ranging from " +
    "methods that only look at correlations of rules and output classes (independently of the machine learning model " +
    "trained with the resulting labels), to those that harness the interplay of neural networks and weakly labeled data." +
    "We illustrate the benchmarking potential of the framework with a performance comparison of several reference " +
    "implementations on a selection of datasets that are already available in Knodle.";

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
    " \t author={Anastasiia Sedova and Andreas Stephan and Marina Speranskaya and Benjamin Roth}, \n" +
    " \t title={Knodle: Modular Weakly Supervised Learning with PyTorch},\n" +
    " \t booktitle={Proceedings of the 6th Workshop on Representation Learning for NLP, RepL4NLP@ACL-IJCNLP 2021, Online, August 6, 2021},\n" +
    " \t pages={100--111},\n " +
    " \t publisher={Association for Computational Linguistics},\n" +
    " \t year={2021},\n" +
    " \t url={https://doi.org/10.18653/v1/2021.repl4nlp-1.12},\n" +
    " \t doi={10.18653/v1/2021.repl4nlp-1.12} \n }";

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
    " \t author= {Anastasiya Sedova and Olga Mitrofanova}, \n" +
    " \t title= {Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions}, \n" +
    " \t booktitle= {XX International Conference 'Internet and Modern Society': Computer" +
    " \t Linguistics and Computing Ontologies, {IMS} {CLCO} 2017, St. Petersburg, Russia, June 21-23, 2017}, \n" +
    " \t pages={132--144}, \n" +
    " \t publisher={ITMO University}, \n" +
    " \t year={2017}, \n" +
    " \t url={https://doi.org/10.17586/2541-9781-2017-1-132-144}, \n" +
    " \t doi={10.17586/2541-9781-2017-1-132-144}, \n" +
    " \t timestamp={Wed, 10 Mar 2021 10:49:24 +0100},\n" +
    " \t biburl={https://dblp.org/rec/conf/ims2/SedovaM17.bib},\n" +
    " \t bibsource={dblp computer science bibliography, https://dblp.org} \n }";

var topic_modeling_comparable_abstract = "The paper is devoted to processing parallel and comparable corpora by " +
    "means of topic modelling. We focus our attention on Russian and English parallel and comparable texts. We use " +
    "Latent Dirichlet Allocation (LDA) algorithm for building topic models of fiction texts, evaluation of " +
    "compatibility for the original text and its translation(s), selection of possible translation equivalents."

var topic_modeling_comparable_citation = "@inproceedings{10.1145/3143699.3143734" +
    "author = {Mitrofanova, Olga and Sedova, Anastasiia}," +
    "title = {Topic Modelling in Parallel and Comparable Fiction Texts (the Case Study of English and Russian Prose)}," +
    "year = {2017}," +
    "isbn = {9781450354370}, " +
    "publisher = {Association for Computing Machinery}," +
    "address = {New York, NY, USA}," +
    "url = {https://doi.org/10.1145/3143699.3143734}," +
    "doi = {10.1145/3143699.3143734}," +
    "abstract = {The paper is devoted to processing parallel and comparable corpora by means of topic modelling. " +
    "We focus our attention on Russian and English parallel and comparable texts. We use Latent Dirichlet Allocation " +
    "(LDA) algorithm for building topic models of fiction texts, evaluation of compatibility for the original text and " +
    "its translation(s), selection of possible translation equivalents.}," +
    "booktitle = {Proceedings of the International Conference IMS-2017}," +
    "pages = {175–180}," +
    "numpages = {6}," +
    "keywords = {Topic Modelling, Fiction, Text Corpora, English, Russian, Parallel and Comparable Texts}," +
    "location = {Saint Petersburg, Russian Federation}," +
    "series = {IMS2017}}";

var topic_modeling_comparable_citation_text = "@inproceedings{10.1145/3143699.3143734, \n" +
    " \t author = {Mitrofanova, Olga and Sedova, Anastasiia}, \n" +
    " \t title = {Topic Modelling in Parallel and Comparable Fiction Texts (the Case Study of English and Russian Prose)}, \n" +
    " \t year = {2017}, \n" +
    " \t isbn = {9781450354370}, \n" +
    " \t publisher = {Association for Computing Machinery}, \n" +
    " \t address = {New York, NY, USA}, \n" +
    " \t url = {https://doi.org/10.1145/3143699.3143734}, \n" +
    " \t doi = {10.1145/3143699.3143734}, \n" +
    " \t booktitle = {Proceedings of the International Conference IMS-2017},  \n" +
    " \t pages = {175–180},  \n" +
    " \t numpages = {6}, \n" +
    " \t keywords = {Topic Modelling, Fiction, Text Corpora, English, Russian, Parallel and Comparable Texts}, \n" +
    " \t location = {Saint Petersburg, Russian Federation}, \n" +
    " \t series = {IMS2017} \n }";
