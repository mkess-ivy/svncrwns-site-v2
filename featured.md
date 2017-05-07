---
layout: white-bg
title: featured
permalink: /featured/
---


<div class="crwns-wrapper clear">
	
	<div class="spacer2x"></div>
	
	<div class="title-container">
		<!-- <div class="title-icon"><img src="/assets/images/crown-logo.svg" /></div> -->
		<div class="title">featured work</div>
		<div class="spacer3x"></div>
	</div>
	{% include backtop_icon.html %}



{% assign features = site.catalog | where:"featured", "yes" | sort:"featured-rank" %}
{% for project in features limit: 7 %}
	
	{% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
			{% if thecycle == 'odd' %}
			<div class="row featured-separator clear">
				<div class="box-hero clear">
					<div class="box-hero__img">
						<img src="{{ project.img-path }}" />
					</div>
					<div class="box-hero__text">
						<div class="box-hero__text--title brand-link">
							<a href="{{ project.url }}">{{ project.title }}</a>
						</div>
						<div class="box-hero__meta">
							{{ project.subtitle }}
						</div>
						<a href="{{ project.url }}"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
					</div>
					
				</div>
			</div>
			{% endif %}
			{% if thecycle == 'even' %}
				<div class="row featured-separator clear">
					<div class="box-hero clear">
						<div class="box-hero__img box-hero__img--right">
							<img src="{{ project.img-path }}" />
						</div>
						<div class="box-hero__text box-hero__text-r">
							<div class="box-hero__text--title brand-link">
								<a href="{{ project.url }}">{{ project.title }}</a>
							</div>
							<div class="box-hero__meta">
								{{ project.subtitle }}
							</div>
							<a href="{{ project.url }}"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
						</div>
						
					</div>
				</div>
			{% endif %}

	{% endfor %}

	
	<!-- Pre-Footer -->
	<div class="row">
		<div class="sub-link">
      		<a href="{{ site.baseurl }}/catalog">view catalog</a>
    	</div>
	</div>
</div>