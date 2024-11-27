---
layout: default
title: Blog
permalink: /blog/
---

# Blog Categories

<div class="categories-list">
    {% for category in site.categories %}
    <a href="/blog/{{ category[0] | downcase }}/" class="category-card">
        <div class="category-content">
            <span class="category-name">{{ category[0] | capitalize }}</span>
        </div>
    </a>
    {% endfor %}
</div>

<style>
    /* Kontener na kategorie */
    .categories-list {
        margin: 30px 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    /* Styl karty dla kategorii */
    .category-card {
        text-decoration: none;
        display: block;
        border: 2px solid #e0e0e0;
        border-radius: 10px;
        background: linear-gradient(135deg, #f3f3f3, #ffffff);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .category-card:hover {
        transform: translateX(10px);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        border-color: #007acc;
    }

    /* Zawartość karty */
    .category-content {
        padding: 15px 20px;
        text-align: left;
    }

    .category-name {
        font-size: 1.3em;
        font-weight: bold;
        color: #333333;
        text-transform: uppercase;
        transition: color 0.3s ease;
    }

    .category-card:hover .category-name {
        color: #007acc;
    }
</style>
