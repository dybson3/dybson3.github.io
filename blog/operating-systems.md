---
layout: default
category: operating-systems
permalink: /blog/operating-systems/
---
{% assign name = site.data.categories[page.category] %}
<h1><span lang="pl">{{ name.pl }}</span><span lang="en">{{ name.en }}</span></h1>

{% for post in site.categories[page.category] %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}
