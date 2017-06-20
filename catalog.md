---
layout: white-bg
title: catalog
permalink: /catalog/

home_hero_img: /assets/images/hypebeast.jpg
---


<div class="hero-wrapper">
	<div class="title-container">
		<div class="title">work<br/>catalog.</div>
	</div>
	{% include backtop_icon.html %}
</div>
<div class="outer_wrapper">
	<div class="svn-wrapper">
		<div id="home" class="svn-primary-hero catalog-hero" style="background-image: url('{{ page.home_hero_img }}');">
    </div>
	</div>
</div>
<div class="outer_wrapper">
	<div class="svn-wrapper">
		<div class="offerings-wrapper">
			<div class="offerings-title">offerings</div>
			<div class="offerings-wrapper-inner clear">
				<div class="offerings-group">
					<div class="offerings-item">lookbook design</div>
					<div class="offerings-item">short films</div>
					<div class="offerings-item">video production</div>
				</div>
				<div class="offerings-group">
					<div class="offerings-item">web design</div>
					<div class="offerings-item">editorial photography</div>
					<div class="offerings-item">concept photography</div>
				</div>
				<div class="offerings-group">
					<div class="offerings-item">brand strategy</div>
					<div class="offerings-item">brand management</div>
					<div class="offerings-item">web development</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="outer_wrapper">
	<div class="svn-wrapper">
		
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

{% include upcoming_events.html %}