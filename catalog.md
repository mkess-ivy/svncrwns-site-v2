---
layout: page
title: catalog
permalink: /catalog/
---

<div class="box-page-title">
	<!-- <div class="box-page-title__text">{{ page.title }}</div> -->
</div>
<div class="crwns-wrapper clear">
	<div class="row martop-catalog clear">
		<div class="title-container">
			<div class="title-icon"><img src="/assets/images/crown-logo.svg" width="48" /></div>
			<div class="title">svncrwns work catalog</div>
		</div>
	</div>
	<div class="separator"></div>

	<div class="title-container">2016</div>
	
	{% for project in site.catalog reversed %}
	{% if project.year == "2016" %}
	<div class="row martop-catalog clear">
		<div class="box-hero box-hero-v2 center-position">
			<!-- <div class="box-hero__text--date box-hero__text--date-v2">{{ project.date | date: '%B %Y' }}</div> -->
			<div class="catalog-link">
				<a href="{{ project.url }}">{{ project.title }}</a>
			</div>
			<!-- <div class="box-hero__text--category sub-link sub-link-v2"><a href="/">.{{ project.medium }}.</a></div> -->
			<!-- <div class="box-hero__text--content box-hero__text--content-v2">{{ project.excerpt }}</div> -->
		</div>
	</div>
	{% endif %}
	{% endfor %}

	<div class="separator"></div>

	<div class="title-container">2015</div>
	{% for project in site.catalog reversed %}
	{% if project.year == "2015" %}
	<div class="row martop-catalog clear">
		<div class="box-hero box-hero-v2 center-position">
			<!-- <div class="box-hero__text--date box-hero__text--date-v2">{{ project.date | date: '%B %Y' }}</div> -->
			<div class="catalog-link">
				<a href="{{ project.url }}">{{ project.title }}</a>
			</div>
			<!-- <div class="box-hero__text--category sub-link sub-link-v2"><a href="/">.{{ project.medium }}.</a></div> -->
			<!-- <div class="box-hero__text--content box-hero__text--content-v2">{{ project.excerpt }}</div> -->
		</div>
	</div>
	{% endif %}
	{% endfor %}

	<div class="separator"></div>

	<div class="title-container">2014</div>
	{% for project in site.catalog reversed %}
	{% if project.year == "2014" %}
	<div class="row martop-catalog clear">
		<div class="box-hero box-hero-v2 center-position">
			<!-- <div class="box-hero__text--date box-hero__text--date-v2">{{ project.date | date: '%B %Y' }}</div> -->
			<div class="catalog-link">
				<a href="{{ project.url }}">{{ project.title }}</a>
			</div>
			<!-- <div class="box-hero__text--category sub-link sub-link-v2"><a href="/">.{{ project.medium }}.</a></div> -->
			<!-- <div class="box-hero__text--content box-hero__text--content-v2">{{ project.excerpt }}</div> -->
		</div>
	</div>
	{% endif %}
	{% endfor %}
	

	<div class="separator"></div>
	<!-- Pre-Footer -->
	<!-- <div class="row">
		<div class="sub-link">
      		<a href="/archive">interested in working with us?</a>
    	</div>
	    <div class="padbot3 center-pos">
	        <a href="/work"><img src="/assets/images/prev-nav.png" class="bottom-footer-nav" /></a>
	        <a href=""><img src="/assets/images/back-to-top-nav.png" class="bottom-footer-nav" /></a>
	        <a href="/work-with-us"><img src="/assets/images/next-nav.png" class="bottom-footer-nav" /></a>
	    </div>
	</div> -->
</div>