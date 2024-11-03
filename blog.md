---
layout: default
title: Blog
permalink: /blog/
---

# Blog Categories

{% for category in site.categories %}
- [{{ category[0] | capitalize }}](/blog/{{ category[0] | downcase }}/)
{% endfor %}
