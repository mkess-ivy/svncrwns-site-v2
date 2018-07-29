---
layout: phase1-fullpage
title: journal
permalink: /journal/
---
<div class="grid">
    <div class="masthead_title">
        Studio happenings, insights, experiments + perspectives on branding
    </div>
    <div class="featured">
        featured
    </div>
</div>

<div class="grid_full">
{% assign featured_post = site.posts | where: "featured", "true" %}
{% for post in featured_post limit:1 %}
<div class="featured_post">
    <div class="featured_image" style="background-image:url('{{ post.featured_image }}');"></div>

    <div class="grid">
        <div class="featured_title">
            <a href="{{ post.url }}">{{ post.title }}</a>
        </div>
        <div class="featured_summary">{{ post.featured_summary }}</div>
    </div>
</div>
{% endfor %}
</div>

<div class="grid fixed_width_grid">
    <div class="frow justify-start">
    {% for post in site.posts %}
        <div class="general_post">
            <div class="general_post_image" style="background-image:url('{{ post.featured_image }}');"></div>
            <div class="general_post_title">
                <a href="{{ post.url }}">{{ post.title }}</a>
            </div>
        </div>
    {% endfor %}
    </div>
</div>
