---
layout 						: brown-bg
title 						: Opportunities
permalink 					: /opportunities/

featured-body-hero 			: "/assets/images/baltimore-studios.jpg"
---

{% include 

	new_component_library/page_title.html 

	page_title="Opportunities"
	page_subtitle="Let's share ideas and<br/>make things happen"

%}

<section style="background-color: {{ include.bg }};">
<div class="page_wrapper">
	<!-- <div class="testimonial-title">a word from our community</div> -->
	<div class="frow column-end">
	{% for items in site.data.svncrwns-opps %}
	<div class="opps-wrapper">
		<div class="opps-title">{{ items.title }}</div>
		<div class="opps-text">{{ items.text }}</div>
		<div class="opps-header">{{ items.header }}</div>
		<div class="opps-text">{{ items.header_text }}</div>
		<div class="opps-header">{{ items.header2 }}</div>
		<div class="opps-text">{{ items.header2_text }}</div>
		<div class="spacer1x"></div>
		<div class="opps-link"><a href="mailto:hello@svncrwns.com?subject=Opportunities" class="cta-btn">
			<div>let's talk</div>
		</a></div>
	</div>
	{% endfor %}
	</div>

</div>
</section>

{% include 

	new_component_library/subscribe.html 

	title="Stay in the loop."
	text="We'll be sharing opportunities that we're working on, which means more opps where we can work with you.  Stay tuned, and subscribe to our email&nbsp;list."

%}