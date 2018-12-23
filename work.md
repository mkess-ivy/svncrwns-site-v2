---
layout: full-grid
title: work
permalink: /work/
archive_image: /assets/images/home-slide-1.png
---

<div class="grid">
  <div class="beta_page_title">Our Work</div>

  <section class="beta_masthead_section">
    <div class="discipline_section">
      <div class="frow justify-between">
        <div class="small_alpha">
          <div class="small_title_wrapper">
            <div class="small_title_line"></div>
            <div class="small_title_text">Client Work</div>
          </div>
          <div class="small_title_description">
            Our strategic aim is to work with our clients to create better approaches to connecting with their consumer market. We manage + create e-commerce + digital platforms; we create content by photo + film; and we produce branded activations.  We work with organizations to identify opportunities of growth + efficiency in their operations. 
          </div>
        </div>
        <div class="small_alpha">
          <div class="small_title_wrapper">
            <div class="small_title_line"></div>
            <div class="small_title_text">In-House Projects</div>
          </div>
          <div class="small_title_description">
            Our in-house work looks like short films, feature films, fashion lookbooks and visuals, working with music artists, developing events + partnerships, creating original content and platforms to share new perspectives.
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="main_season">
    <div class="season_title">
      2018 season
      <div class="season_roman">iv</div>
    </div>
    <div class="portfolio_grid_work">
      <div class="frow justify-between">
        {% assign season_4 = site.catalog | where: "season", "4" %}
        {% for items in season_4 %}
          {% include components/portfolio_single_work.html %}
        {% endfor %}
      </div>
    </div>
  </section>
</div>
