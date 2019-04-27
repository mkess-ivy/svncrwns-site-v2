---
layout: full-grid
title: Work
permalink: /work/
archive_image: /dist/images/home-slide-1.png

description: SVNCRWNS has a portfolio of work that includes client work and in-house projects.  Our company started with the founders working as artists to fund their creative projects.  The team began consulting with other creatives and small business owners to assist with solving problems through a creative and marketing lens, to ultimately fund their special projects such as documentaries, short films and exhibitions.

keywords: production company, svncrwns, e-commerce, women-owned businesses, photography, consulting, business operations, videography, pop-up installation, pop-up shop, exhibitions, films, documentaries, special projects, black women artists, black women in business
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
  {% include components/read-more-bar.html 
      image="dist/images/read-more-work.jpg"
      prev-link="/"
      prev-title="go home"
      next-link="/journal/"
      next-title="read journal"
      position="42%"
  %}
</div>