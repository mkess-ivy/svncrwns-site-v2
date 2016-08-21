---
layout: page
title: catalog
permalink: /catalog/
---


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