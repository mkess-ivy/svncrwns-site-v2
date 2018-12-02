---
layout: grid
title: journal
permalink: /journal/
---
<div class="grid">
    <div class="masthead_title js_scroll_reveal">
        Studio happenings, insights + perspectives on branding
    </div>
    <div class="featured">
        journal
    </div>
</div>

<div class="grid_full js_scroll_reveal">
{% assign featured_post = site.posts | where: "featured", "true" %}
{% for post in featured_post limit:1 %}
<div class="featured_post">
    <div class="featured_image" style="background-image:url('{{ post.featured_image }}');"></div>

    <div class="grid js_scroll_reveal">
        <div class="featured_meta">
            <div class="featured_title">
                <a href="{{ post.url }}">{{ post.title }}</a>
            </div>
            <div class="featured_summary">{{ post.featured_summary }}</div>
        </div>
    </div>
</div>
{% endfor %}
</div>

<div class="grid fixed_width_grid">
    <div class="frow justify-between">
        <div class="all_posts_wrapper">
            <div class="frow wrap">
                {% for post in site.posts limit:6 %}
                    <div class="general_post js_scroll_reveal">
                        <div class="general_post_image" style="background-image:url('{{ post.featured_image }}');"></div>
                        <div class="general_post_title">
                            <a href="{{ post.url }}">{{ post.title }}</a>
                        </div>
                    </div>
                {% endfor %}
            </div>


        </div>
        <div class="special_wrapper">
            <div class="frow justify-between">
                <div class="special_single js_scroll_reveal">
                    <div class="special_title">
                        view summer 2018 packages
                    </div>
                    <div class="special_subtitle">
                        <!-- Let's talk branding -->
                    </div>
                    <div class="special_cta">
                        {% include components/cta.html
                            link="http://www.svncrwns.com/assets/summerpackages2018.pdf"
                            title="packages"
                        %}
                    </div>
                </div>
                <div class="special_single two js_scroll_reveal">
                    <div class="special_title">
                        Svncrwns monthly digest
                    </div>
                    <div class="special_subtitle">
                        <!-- Let's talk branding -->
                    </div>
                    <div class="special_cta">
                        {% include components/cta.html
                            link="http://www.svncrwns.com/newsletter/"
                            title="sign up"
                        %}
                    </div>
                </div>
            </div>


        </div>
    </div>

        <div class="archive_wrapper archive_wrapper_properties js_scroll_reveal">
            <div class="archive_header">
                The Archive
            </div>
            <div class="archive_content">
                <div class="frow justify-between">
                    {% for post in site.posts offset:6 %}
                    <div class="archive_single">
                        <div class="frow justify-start">
                            <div class="archive_date">{{ post.date | date: "%b %d %Y" }}</div>
                            <div class="archive_meta">
                                <div class="archive_title">
                                    <a href="{{ post.url }}">{{ post.title }}</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    {% endfor %}
                </div>

            </div>
        </div>


</div>
