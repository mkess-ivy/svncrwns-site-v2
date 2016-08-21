---
layout: default
title: featured
permalink: /featured/
---

<div class="box-page-title">
	<!-- <div class="box-page-title__text">{{ page.title }}</div> -->
</div>

<div class="crwns-wrapper clear">
	<div class="spacer"></div>

	<!-- Autoplay Video Hero -->
	<div class="video-wrapper section-bg video-hero video-bg clear">
		<!-- <video autoplay loop muted poster="screenshot.jpg" class="background clear">
			<source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
		</video> -->
		<!-- <iframe src="https://player.vimeo.com/video/176795301?autoplay=1&loop=1" width="1000" height="563" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->
		<div class="backtop-icon"><a href="#home"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a></div>
	</div>
	<div class="spacer3x2"></div>
	
	<div class="title-container">
		<div class="title-icon"><img src="/assets/images/crown-logo.svg" /></div>
		<div class="title">featured work</div>
		<div class="spacer3x"></div>
	</div>
	

	<!-- Sample work here -->
	<!-- <div class="some-box clear">
		<div class="some-box_text"><span class="year">2015</span><br>We’re not just a production house, we’re not just a creative house, so yes, it’s absolutely a must to sign up to this list.  Don’t take our word for it.  From exclusive shares of information, release dates to personal invitations to conceptually - designed events, you heard it first, act now.</div>
		<div class="some-box_pic">
			<img src="/assets/images/geostairs.jpg"/>
		</div>
	</div> -->



	<!-- #Work1 , removed martop2 from box-hero -->
	{% for project in site.catalog limit: 5 reversed %}
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