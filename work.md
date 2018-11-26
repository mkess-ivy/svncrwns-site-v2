---
layout: grid
title: work
permalink: /work/
bg_color: D6C4B2
---

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
          Our mission isn’t to churn out websites and design assets — we’re apart of your team and our main priority is helping our clients grow their organizations
        </div>
      </div>
      <div class="small_alpha">
        <div class="small_title_wrapper">
          <div class="small_title_line"></div>
          <div class="small_title_text">Production</div>
        </div>
        <div class="small_title_description">
          Our mission isn’t to churn out websites and design assets — we’re apart of your team and our main priority is helping our clients grow their organizations
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

<section class="archive_work">
  <div class="archive_header">
    Archive
  </div>

  <div class="frow justify-between">
    <div class="archive_season">
      <div class="archive_season_title">
        2017 Season
        <div>III</div>
      </div>
      <div class="frow direction-column">
        {% assign season_3 = site.catalog | where: "season", "3" %}
        <ol>
        {% for items in season_3 %}
          {% include components/archive_single_item.html %}
        {% endfor %}
        </ol>
      </div>
    </div>
    <div class="archive_season">
      <div class="archive_season_title">
        2016 Season
        <div>II</div>
      </div>
      <div class="frow direction-column">
        {% assign season_2 = site.catalog | where: "season", "2" %}
        {% for items in season_2 %}
          {% include components/archive_single_item.html %}
        {% endfor %}
      </div>
    </div>
    <div class="archive_season">
      <div class="archive_season_title">
        2015 Season
        <div>I</div>
      </div>
      <div class="frow direction-column">
        {% assign season_1 = site.catalog | where: "season", "1" %}
        {% for items in season_1 %}
          {% include components/archive_single_item.html %}
        {% endfor %}
      </div>
    </div>
  </div>

</section>