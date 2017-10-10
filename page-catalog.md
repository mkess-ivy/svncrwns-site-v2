---
layout 						: brown-bg
title 						: catalog
permalink 					: /catalog/

featured-body-hero 			: "/assets/images/baltimore-studios.jpg"
---

{% include 

	new_component_library/page_title.html 

	page_title= "work<br/>catalog"
	page_subtitle= "all projects"

%}

<div class="svn-wrapper">
	<div class="">
		<div class="clear">
	
			{% include new_component_library/catalog_group.html season="3" %}

			{% include new_component_library/catalog_group.html season="2" %}

			{% include new_component_library/catalog_group.html season="1" %}

		</div>
	</div>

</div>

{% include new_component_library/upcoming_events.html %}