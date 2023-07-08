---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

- Learning with Noisy Labels by Adaptive Gradient-Based Outlier Removal \
**Anastasiia Sedova**, Lena Zellinger, Benjamin Roth \
ECML PKDD 2023 \
[paper](https://arxiv.org/pdf/2306.04502) [citation]() \
<details>
  <summary>Abstract</summary>
  
  An accurate and substantial dataset is essential for training
a reliable and well-performing model. However, even manually annotated
datasets contain label errors, not to mention automatically labeled ones.
Previous methods for label denoising have primarily focused on detecting
outliers and their permanent removal – a process that is likely to over- or
underfilter the dataset. In this work, we propose AGRA: a new method
for learning with noisy labels by using Adaptive GRAdient-based outlier
removal1. Instead of cleaning the dataset prior to model training, the
dataset is dynamically adjusted during the training process. By compar-
ing the aggregated gradient of a batch of samples and an individual exam-
ple gradient, our method dynamically decides whether a corresponding
example is helpful for the model at this point or is counter-productive and
should be left out for the current update. Extensive evaluation on sev-
eral datasets demonstrates AGRA’s effectiveness, while a comprehensive
results analysis supports our initial hypothesis: permanent hard outlier
removal is not always what model benefits the most from.
</details>


- ACTC: Active Threshold Calibration for Cold-Start Knowledge Graph Completion \
**Anastasiia Sedova**, Benjamin Roth \
ACL 2023 \
[paper](https://arxiv.org/pdf/2104.11557)) [citation]()

- Knodle: Modular Weakly Supervised Learning with PyTorch \
**Anastasiia Sedova**, Andreas Stephan, Marina Speranskaya, Benjamin Roth \ 
RepL4NLP-2021, ACL 2021 \
[paper](https://arxiv.org/pdf/2104.11557) [citation]()

- Topic Modelling of Russian Texts based on Lemmata and Lexical Constructions \
**Anastasiia Sedova**, Olga Mitrofanova \
IMS 2017 \
[paper]() [citation]()

- Topic Modelling in Parallel and Comparable Fiction Texts (the case study of English and Russian prose)
Olga Mitrofanova, **Anastasiia Sedova** \
ITCL 2017 \
[paper](https://dl.acm.org/doi/abs/10.1145/3143699.3143734) [citation]()


{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
