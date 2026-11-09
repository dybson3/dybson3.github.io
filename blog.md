---
layout: default
title: Blog
permalink: /blog/
---

<h1><span lang="pl">Kategorie bloga</span><span lang="en">Blog Categories</span></h1>

<p class="lang-note" lang="pl">🇬🇧 Wpisy na blogu są na razie dostępne tylko po angielsku.</p>

<div class="categories-list">
    {% for category in site.categories %}
    {% assign name = site.data.categories[category[0]] %}
    <a href="/blog/{{ category[0] | downcase }}/" class="category-card">
        <div class="category-content">
            {% if name %}
            <span class="category-name"><span lang="pl">{{ name.pl }}</span><span lang="en">{{ name.en }}</span></span>
            {% else %}
            <span class="category-name">{{ category[0] | capitalize }}</span>
            {% endif %}
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
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
    }

    .category-card:hover {
        transform: translateX(10px);
        background: rgba(255, 255, 255, 0.05);
        border-color: #38bdf8;
    }

    /* Zawartość karty */
    .category-content {
        padding: 20px 25px;
        text-align: left;
    }

    .category-name {
        font-size: 1.3em;
        font-weight: 600;
        color: #e2e8f0;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: color 0.3s ease;
    }

    .category-card:hover .category-name {
        color: #38bdf8;
    }
</style>
