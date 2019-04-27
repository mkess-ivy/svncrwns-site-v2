---
layout: full-grid
title: Careers
permalink: /careers/
archive_image: /assets/images/home-slide-1.png

description: SVNCRWNS has a list of opening positions. Check out our Careers page. Apply today.

tagline: Careers! - We're Growing
tagline-description: "The time has come and we couldn’t be more excited to expand on our talent and company.  We’re looking for women artists in tech, design and media who are passionate about supporting other women artists and entrepreneurs.  Join our team, check out the open positions below."

apply-now-link: "https://forms.gle/tefdBTyMr76JG74E6"

keywords: production company, svncrwns, e-commerce, women-owned businesses, photography, consulting, business operations, videography, pop-up installation, pop-up shop, exhibitions, films, documentaries, special projects, black women artists, black women in business
---

<div class="grid">
  <div class="themealpha-phase1-masthead">
    <div class="themealpha-phase1-header">
        {{ page.tagline }}
    </div>
    <div class="themealpha-phase1-subheader">
        {{ page.tagline-description }}
    </div>
  </div>

  <div class="overlap-image-section">
    <div class="frow justify-end">
      <div class="overlap-image">
        <img src="/assets/images/careers-image-main.png" />
      </div>
    </div>
    <div class="color-block-section">
      <div class="color-block-inner">
        <div class="color-block-inner-small-text">Open</div>
        <div class="color-block-inner-big-text">Positions</div>
        <div class="line"></div>
        <div class="color-block-arrow">
          <div class="color-block-inner-arrow-true">
            <img src="/assets/images/arrow-true.png" />
          </div>
          <div class="color-block-inner-arrow-circle">
            <img src="/assets/images/arrow-circle.png" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion-wrapper js_scroll_reveal">
    <div class="accordion">
      {% for item in site.data.career_positions %}
      <div class="accordion-header">{{ item.accordion-header }}</div>
      <div class="accordion-content">
        {{ item.accordion-content }}
        <div class="apply-wrapper">
          Join our Team<br/>
          <a href="{{ page.apply-now-link }}" class="apply-link">Apply Now</a>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
  <div></div>
  <div></div>
  <div></div>
</div>
