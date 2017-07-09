---
layout            : white-bg
title 						: featured
permalink					: /featured/
page_title: "featured<br/>work"
---


{% include components/backtop_icon.html %}

{% include components/page_title.html %}

<div class="outer_wrapper">
{% assign features = site.catalog | where:"featured", "yes" | sort:"featured-rank" %}
{% for project in features limit: 7 %}

	{% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
	{% if thecycle == 'odd' %}
		{% include components/2col_odd_content.html %}
	{% endif %}

	{% if thecycle == 'even' %}
		{% include components/2col_even_content.html %}
	{% endif %}
{% endfor %}

</div>

{% include components/upcoming_events.html %}