---
layout 						: brown-bg
title 						: contact
permalink 					: /contact/

featured-body-hero 			: "/assets/images/tmp-backstage.jpg"
---

{% include 

	new_component_library/page_title.html

	page_title="contact"
	page_subtitle="let's talk soon"

%}

{% include 

	new_component_library/primary_hero.html 

	primary_hero="/assets/images/tmp-film-crew.jpg" 

%}

<div class="svn-wrapper clear">

	{% for contact in site.data.data_contact_list %}
	<div class="contact-title">
		<div class="sub-title">{{ contact.heading }}</div>
		{% for item in contact.items %}
		<div class="contact_info">
				
			<a href="{{ item.url }}">{{ item.name }}</a>
				
		</div>
		{% endfor %}
	</div>
	{% endfor %}
	
</div>