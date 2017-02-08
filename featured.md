---
layout: white-bg
title: featured
permalink: /featured/
---


<div class="crwns-wrapper clear">
	
	<div class="spacer2x"></div>
	
	<div class="title-container">
		<div class="title-icon"><img src="/assets/images/crown-logo.svg" /></div>
		<div class="title">featured work</div>
		<div class="spacer3x"></div>
	</div>
	<div class="backtop-icon"><a href="#home"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a></div>



{% assign sorted = (site.catalog | sort: 'date') | reverse %}
{% for project in sorted limit: 5 reversed %}
	
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
					</div>
					<div class="box-hero__meta">
						<div class="box-hero__category">
							{{ project.category }}
						</div>
						<div class="box-hero__text--date box-hero__text--date-position">
							{{ project.date | date: '%Y' }}
						</div>
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
					<div class="box-hero__text">
						<div class="box-hero__text--title-r brand-link">
							<a href="{{ project.url }}">{{ project.title }}</a>
						</div>
					</div>
					<div class="box-hero__meta box-hero__meta-r">
						<div class="box-hero__category">
							{{ project.category }}
						</div>
						<div class="box-hero__text--date box-hero__text--date-position">
							{{ project.date | date: '%Y' }}
						</div>
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