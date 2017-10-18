---
[//]: # (Meta Info)
layout            			: white-bg
title 						: Featured Work
permalink					: /featured/
featured-body-hero 			: "/assets/images/studio-photographer.jpg"
---

{% include 

	new_component_library/page_title.html

	page_title=	"featured<br/>work"
	page_subtitle= "7 most recent projects" 

%}

<div class="outer_wrapper">
{% assign features = site.catalog | where:"featured", "yes" | sort:"featured-rank" %}
{% for project in features limit: 7 %}

	{% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
	{% if thecycle == 'odd' %}
	<!-- 2col_left -->
	<div class="page_wrapper">
		<div class="frow custom_frow_end_to_justify">

			<div class="featured_image"><img src="{{ project.catalog-cover-image }}" /></div>
			
			<div class="featured_copy">
				<div class="frow centered">
					<div class="column-end">
						<div class="catalog_featured_title">
							<a href="{{ project.url }}" class="link">{{ project.title }}</a>
						</div>
						<div class="project_copy">{{ project.featured-subtitle }}</div>
						<div class="featured_category">{{ project.featured-category }}</div>

					</div>
				</div>
			</div>
			
		</div>
	</div>
	{% endif %}

	{% if thecycle == 'even' %}
	<!-- 2col_right -->
	<div class="page_wrapper">
		<div class="frow justify-between direction-reverse">
			
			<div class="featured_image"><img src="{{ project.catalog-cover-image }}" /></div>

			<div class="featured_copy">
				<div class="frow centered">
					<div class="column-end">
						<div class="catalog_featured_title">
							<a href="{{ project.url }}" class="link">{{ project.title }}</a>
						</div>
						<div class="project_copy">{{ project.featured-subtitle }}</div>
						<div class="featured_category">{{ project.featured-category }}</div>

					</div>
				</div>
			</div>
		</div>
	</div>
	{% endif %}
{% endfor %}

</div>