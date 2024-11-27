---
layout: default
title: Blog
permalink: /blog/
---

# Blog Categories

<div class="categories-list">
    <ul>
        {% for category in site.categories %}
        <li>
            <a href="/blog/{{ category[0] | downcase }}/" class="category-link">
                {{ category[0] | capitalize }}
            </a>
        </li>
        {% endfor %}
    </ul>
</div>

<style>
    .categories-list {
        margin: 20px 0;
        padding: 0;
    }
    .categories-list ul {
        list-style-type: none;
        padding: 0;
    }
    .categories-list li {
        margin: 5px 0;
    }
    .category-link {
        text-decoration: none;
        font-size: 1.2em;
        color: #007acc;
        transition: color 0.3s ease;
    }
    .category-link:hover {
        color: #005f99;
    }
</style>
