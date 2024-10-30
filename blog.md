---
layout: default
title: Categories
permalink: /categories/
---

# Blog Categories

{% for category in site.categories %}
## {{ category[0] | capitalize }}

{% for post in category[1] %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
{% endfor %}
