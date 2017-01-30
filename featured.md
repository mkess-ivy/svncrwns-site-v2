---
layout: white-bg
title: featured
permalink: /featured/
---


<div class="crwns-wrapper clear">
	<div class="spacer"></div>

	<!-- Autoplay Video Hero -->
	
	<div class="spacer2x"></div>
	
	<div class="title-container">
		<div class="title-icon"><img src="/assets/images/crown-logo.svg" /></div>
		<div class="title">featured work</div>
		<div class="spacer3x"></div>
	</div>



{% assign sorted = (site.catalog | sort: 'date') | reverse %}
{% for project in sorted limit: 5 reversed %}
	
		{% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
		  {% if thecycle == 'odd' %}
			<div class="row padbot20 clear">
				<div class="box-hero clear">
					<div class="box-hero__img">
						<img src="{{ project.img-path }}" />
					</div>
					<div class="box-hero__text">
						<div class="box-hero__text--date box-hero__text--date-position">
							{{ project.date | date: '%B %Y' }}
						</div>
						<div class="box-hero__text--title brand-link">
							<a href="{{ project.url }}">{{ project.title }}</a>
						</div>
						<div class="box-hero__text--content">
							{{ project.excerpt }}
						</div>
					</div>

				</div>
			</div>
			{% endif %}
			{% if thecycle == 'even' %}
				<div class="row padbot20 clear">
					<div class="box-hero clear">
						<div class="box-hero__img box-hero__img--right ">
							<img src="{{ project.img-path }}" />
						</div>
						<div class="box-hero__text">
							<div class="box-hero--right box-hero__text--date box-hero__text--date-position box-hero__text--date-position-r">
								{{ project.date | date: '%B %Y' }}
							</div>
							<div class="box-hero__text--title-r brand-link">
								<a href="{{ project.url }}">{{ project.title }}</a>
							</div>
							<div class="box-hero--right box-hero__text--content box-hero__text--content-r">
								{{ project.excerpt }}
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
	    <!-- <div class="padbot3 center-pos">
	        <a href=""><img src="/assets/images/circle-up.svg" class="bottom-footer-nav" /></a>
	        <a href=""><img src="/assets/images/circle-right.svg" class="bottom-footer-nav last" /></a>
	    </div> -->
	</div>
</div>