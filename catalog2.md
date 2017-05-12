---
layout: white-bg
title: catalog
permalink: /catalog2/
---


<div class="hero-wrapper">
	<div class="title-container">
		<div class="title">work<br/>archive<br/>catalog.</div>
	</div>
	{% include backtop_icon.html %}
</div>

<div class="outer_wrapper">
	<div class="page_wrapper">
		
		<div class="catalog_wrapper_section clear">
			<div class="font_size_med catalog_section_title">2017</div>
			
			{% for project in site.catalog reversed %}
			{% if project.year == "2017" %}
				{% include catalog_item.html %}
			{% endif %}
			{% endfor %}
		</div>

		<div class="catalog_wrapper_section clear">
			<div class="font_size_med catalog_section_title">2016</div>
			
			{% for project in site.catalog reversed %}
			{% if project.year == "2016" %}
				{% include catalog_item.html %}
			{% endif %}
			{% endfor %}
		</div>

		<div class="catalog_wrapper_section clear">
			<div class="font_size_med catalog_section_title">2015</div>
			
			{% for project in site.catalog reversed %}
			{% if project.year == "2015" %}
				{% include catalog_item.html %}
			{% endif %}
			{% endfor %}
		</div>

		<div class="catalog_wrapper_section clear">
			<div class="font_size_med catalog_section_title">2014</div>
			
			{% for project in site.catalog reversed %}
			{% if project.year == "2014" %}
				{% include catalog_item.html %}
			{% endif %}
			{% endfor %}
		</div>

	</div>
</div>