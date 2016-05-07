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
				<a href="/">{{ project.title }}</a></div>
			<div class="box-hero__text--category sub-link sub-link-v2"><a href="/">.{{ project.medium }}.</a></div>
			<div class="box-hero__text--content box-hero__text--content-v2">{{ project.excerpt }}</div>
		</div>
	</div>
	{% endfor %}
</div>