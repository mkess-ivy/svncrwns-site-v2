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
            <div class="small_title_text">Strategy</div>
          </div>
          <div class="small_title_description">
            We work with organizations to identify opportunities of growth + efficiency in their operations.  We help our clients set goals and expectations — then create a strategic plan that is both actionable + measurable.  Our insights are backed by data, industry trends + strategic analysis.
          </div>
        </div>
        <div class="small_alpha">
          <div class="small_title_wrapper">
            <div class="small_title_line"></div>
            <div class="small_title_text">Production</div>
          </div>
          <div class="small_title_description">
            Our strategic aim is to work with our clients to create better approaches to connecting with their consumer market.  We manage + create e-commerce + digital platforms; we create content by photo + film; and we produce branded activations.  <a href="/contact/" style="color: #7A5F1A;">Reach out today</a> to learn how we can join your team.
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="main_season js_scroll_reveal">
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
