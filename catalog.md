---
layout: white-bg
title: catalog
permalink: /catalog/
---

<div class="banner">
	<video autoplay loop muted class="banner__video" poster="/assets/images/poster.jpg">
		<source src="/assets/video/catalog-video.mp4" type="video/mp4">
	</video>
	<div class="crwns-wrapper catalog-wrapper clear">
		<div class="spacer3x"></div>
		<div class="row martop-catalog clear">

			<div class="title-container">
				<div class="title">catalog</div>
			</div>
			<div class="backtop-icon" id="js-backtop"><a href="#home"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a></div>
		</div>
		<div class="separator"></div>

		<div class="title-container">2016</div>
		
		{% for project in site.catalog reversed %}
		{% if project.year == "2016" %}
		<div class="row martop-catalog clear">
			<div class="box-hero box-hero-v2 center-position">
				<div class="catalog-link">
					<a href="{{ project.url }}">{{ project.title }}</a>
				</div>
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
				<div class="catalog-link">
					<a href="{{ project.url }}">{{ project.title }}</a>
				</div>
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
				<div class="catalog-link">
					<a href="{{ project.url }}">{{ project.title }}</a>
				</div>
			</div>
		</div>
		{% endif %}
		{% endfor %}
		

		<div class="separator"></div>
	</div>
	
</div>