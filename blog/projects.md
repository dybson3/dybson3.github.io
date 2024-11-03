---
layout: default
title: Projects
permalink: /blog/projects/
---

# Projects

{% for post in site.categories.projects %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
