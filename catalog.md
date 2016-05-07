---
layout: page
title: catalog
permalink: /catalog/
---

<div class="box-page-title">
	<div class="box-page-title__text">{{ page.title }}</div>
</div>
<div class="crwns-wrapper clear">
	<div class="row martop-catalog clear">
		<div class="box-hero__text--subtext">a running repository of digital + creative productions</div>
	</div>
	<div class="separator"></div>
	<!-- #Work 1 -->
	{% for project in site.catalog reversed %}
	<div class="row martop-catalog clear">
		<div class="box-hero box-hero-v2">
			<div class="box-hero__text--date box-hero__text--date-v2">{{ project.date | date: '%B %Y' }}</div>
			<div class="box-hero__text--title box-hero__text--title-v2 brand-link secondary-link">
				<a href="{{ project.url }}">{{ project.title }}</a></div>
			<div class="box-hero__text--category sub-link sub-link-v2"><a href="/">.{{ project.medium }}.</a></div>
			<div class="box-hero__text--content box-hero__text--content-v2">{{ project.excerpt }}</div>
		</div>
	</div>
	{% endfor %}

	<div class="separator"></div>
	<!-- Pre-Footer -->
	<div class="row">
		<div class="sub-link">
      		<a href="/archive">interested in working with us?</a>
    	</div>
	    <div class="padbot3 center-pos">
	        <a href="/work"><img src="/assets/images/prev-nav.png" class="bottom-footer-nav" /></a>
	        <a href=""><img src="/assets/images/back-to-top-nav.png" class="bottom-footer-nav" /></a>
	        <a href="/work-with-us"><img src="/assets/images/next-nav.png" class="bottom-footer-nav" /></a>
	    </div>
	</div>
</div>