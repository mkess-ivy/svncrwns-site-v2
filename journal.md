---
layout: page
title: journal
permalink: /journal/
---

<!-- Slider / Image -->
<div class="slider-hero_text"><span class="slider-hero_text-small">no magic</span> all hustle</div>
<div id="slideshow">
	<div class="marginauto">
	  <!-- <img src="/assets/images/flowerguy.jpg"> -->
	  <img src="/assets/images/warehouse-1.jpg">
	</div>
	<div class="marginauto">
	  <!-- <img src="/assets/images/jessie.jpg"> -->
	  <img src="/assets/images/warehouse-2.jpg">
	</div>
</div>
<!-- End of Slider -->
<div class="crwns-wrapper">
	<div class="separator"></div>
	<div class="title-container">
		<div class="title-icon"><img src="/assets/images/crown-logo.svg" /></div>
		<div class="title">crwns journal</div>
		<div class="spacer1x"></div>
	</div>

	{% for post in site.journal limit: 5 reversed %}
	<article class="journal-container">
		<div class="journal-wrapper">
			<img src="{{ post.img-path }}" />
		</div>
		<ul class="journal-wrapper_list">
			<li>{{ post.date | date: '%B %Y' }}</li>&nbsp;|&nbsp;
			<li>{{ post.tags }}</li>
		</ul>
		<div class="journal-title"><a href="{{ post.url }}">{{ post.title }}</a></div>
		
	</article>
	{% endfor %}
</div>