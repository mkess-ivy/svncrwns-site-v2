---
layout            : white-bg
title 						: featured
permalink					: /featured/
---


<div class="hero-wrapper">
	<div class="page_wrapper page-title_wrapper">
		<div class="sec_wrapper clear">
			<div class="title-container">
				<div class="title" id="home">featured<br/>work.</div>
			</div>
		</div>
	</div>
	{% include backtop_icon.html %}
</div>

<div class="outer_wrapper">
{% assign features = site.catalog | where:"featured", "yes" | sort:"featured-rank" %}
{% for project in features limit: 7 %}

{% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
		{% if thecycle == 'odd' %}
<!-- Template 1 -->
<div class="page_wrapper">
	<div class="sec_wrapper clear">
		<div class="some-image"><img src="{{ project.catalog-cover-image }}" /></div>
		<div class="some-text clear">
			<div class="some-text-inner">
				<div class="some-text-content">
					<div class="font_lz uppercase"><a href="{{ project.url }}" class="link">{{ project.title }}</a></div>
					<div class="font_size_med uppercase">{{ project.featured-subtitle }}</div>
					<div class="font_size_micro brand_color uppercase">{{ project.featured-category }} | {{ project.featured-index-location }}</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- # Template 1 -->
{% endif %}
{% if thecycle == 'even' %}
<!-- Template 2 -->
<div class="page_wrapper">
	<div class="sec_wrapper clear">
		<div class="some-image some-image-option"><img src="{{ project.catalog-cover-image }}" /></div>
		<div class="some-text some-text-option clear">
			<div class="some-text-inner">
				<div class="some-text-content">
					<div class="font_lz uppercase"><a href="{{ project.url }}" class="link">{{ project.title }}</a></div>
					<div class="font_size_med uppercase">{{ project.featured-subtitle }}</div>
					<div class="font_size_micro brand_color uppercase">{{ project.featured-category }} | {{ project.featured-index-location }}</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- # Template 2 -->
{% endif %}
{% endfor %}

</div>
{% include upcoming_events.html %}