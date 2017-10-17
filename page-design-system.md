---
layout 						: bare-template
title 						: Design System
permalink 					: /design-system/

featured-body-hero 			: "/assets/images/project_collabmore/collabmore-bg.png"
---
<div class="fly-in">
	<div id="nav-trigger" role="button">
		<div class="line l-01"></div>
		<div class="line l-02"></div>
		<div class="line l-03"></div>
		<div class="line l-04"></div>
	</div>
	<div class="ds_menu_title">DS TOC</div>
</div>

<main class="main-content">

  <!-- put your content here -->
<div class="page_wrapper">
<section class="design_content">
	{% include new_component_library/page_title.html
		page_title="Design System"
		page_subtitle="brand component<br/>library"
	%}
	<div class="ds_item_wrapper" id="framework">
		<div class="ds_title">Framework</div>
		<div class="ds_copy">This website is built on the Jekyll framework using HTML, CSS, Javascript and a few vendor plugins. Grid: FROW; CSS Preprocessor - SASS; Built mobile-first with a component-based structure that has lots of flexibility and reusability.</div>
	</div>
	
	<div class="ds_item_wrapper" >
		<div class="ds_title" id="colors-fonts">Colors + Fonts</div>
		
		<div class="ds_component">
			<div class="ds_component_title">Brand Colors</div>
			<div class="frow justify-start">
				<div class="color color1">$color-brand1</div>
				<div class="color color2">$color-brand2</div>
				<div class="color color3">$color-brand3</div>
				<div class="color color4">$color-brand4</div>
				<div class="color color5">$color-brand5</div>
				<div class="color color6">$color-gray</div>
				<div class="color color7 color-white">$color-white</div>
				<div class="color color8">$black</div>
				<div class="color color9">$translucent-light</div>
			</div>
		</div>

		<div class="ds_component">
			<div class="ds_component_title">Brand Fonts</div>
			<div class="frow justify-start">
				<div class="font font1">Design System<br/><br/>$font-brand1</div>
				<div class="font font2">Design System<br/><br/>$font-brand2</div>
				<div class="font font3">Design System<br/><br/>$font-brand3</div>
			</div>
		</div>
	</div>

	<div class="ds_item_wrapper" id="layouts">
		<div class="ds_title">Layouts</div>
		<div class="ds_copy">There are several different layouts that all have subtle differences.</div>
		<br/><br/>
		<div class="ds_component">
			<div class="ds_component_title">bare-template.html</div>
			<div class="ds_copy">
				This template is used for the Design System.  It has a white background with a hero background.  Has the footer and header but does not include the section menu that is present on other layouts.
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title" id="brown-layout">brown-bg.html</div>
			<div class="ds_copy">
				This template is used throughout the website.  It has a brown background with a hero background.  Has the header, back to top icon, preloader icon, secondary menu, footer and the ability to play videos using the html5 javascript code.
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title">coming-soon.html</div>
			<div class="ds_copy">
				Very straight forward.  This is the template to be used when the content isn't ready to be shown.
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title">default.html</div>
			<div class="ds_copy">
				This template is used only for the home page. Because of the time at the top of the home page, I am hiding the brand logo until certain scroll points.
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title">lookbook.html</div>
			<div class="ds_copy">
				This template is used for photography projects found in catalog.  These projects are the only ones shown as a slideshow styled lookbook.  This template does not include the code used for showing videos.  There was a conflict in jquery used for each.
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title">test-lookbook-layout.html</div>
			<div class="ds_copy">
				This template is used with lookbook.html.  This template initiates the slideshow.  Any content added to a document with this listed as the layout will be able to have a slideshow shown.
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title">white-bg.html</div>
			<div class="ds_copy">
				This template is the same as <a href="#brown-layout">brown-bg.html</a> except the background is white.
			</div>
		</div>

	</div>
	<div class="ds_item_wrapper">
		<div class="ds_title">Content Components</div>
		<div class="ds_component" id="two-column">
			<div class="ds_component_title">Two-Column Content</div>
			<div class="ds_copy">Each two column component has a set of two captions that can be used optionally.  The <a href="#caption">caption</a> code is: <br/>{% raw %}{% include new_component_library/captions.html %}{% endraw %}</div>
		</div>
		<div class="ds_component">
			{% 	include new_component_library/2col_left.html 
				featured-image="/assets/images/what-we-do.jpg"
				featured-title="Art<br/>every day."
				featured-subtitle="Our backgrounds vary, but we like to focus our work in film.  We're a production studio."
			%}
			<div class="ds_copy">
				<span class="ds_bold">Component</span><br/>
				{% raw %}{% include new_component_library/2col_left.html %}{% endraw %}
				<div class="highlight">
					include new_component_library/2col_left.html <br/><br/>
					featured-image="/assets/images/what-we-do.jpg"<br/>
					featured-title="Art<br/>every day."<br/>
					featured-subtitle="Our backgrounds vary, but we like to focus our work in film.  We're a production studio."</br>
			
				</div>
			</div>
		</div>
		<div class="ds_component">
			{% 	include new_component_library/2col_right.html 
				featured-image="/assets/images/what-we-do.jpg"
				featured-title="Art<br/>every day."
				featured-subtitle="Our backgrounds vary, but we like to focus our work in film.  We're a production studio."
			%}
			<div class="ds_copy">
				<span class="ds_bold">Component</span><br/>
				{% raw %}{% include new_component_library/2col_right.html %}{% endraw %}
				<div class="highlight">
					include new_component_library/2col_right.html <br/><br/>
					featured-image="/assets/images/what-we-do.jpg"<br/>
					featured-title="Art<br/>every day."<br/>
					featured-subtitle="Our backgrounds vary, but we like to focus our work in film.  We're a production studio."</br>
			
				</div>
			</div>
		</div>
		<div class="ds_component">
			{%	include
				new_component_library/2layered_center.html

				photo1= "/assets/images/backstage-bw.jpg"
				photo1-no= "02"
				photo2= "/assets/images/flowerguy.jpg"
				photo2-no= "03"

				caption_title= "02. FLY HIGH!"
				caption_text= "Our message to the youth is to keep your heads in the clouds.  We need ambitious thinkers. We need fearless dreamers."

				caption_title2= "03. Go."
				caption_text2= "Dream hard, dream long. Let's learn and build the lives we want, leave the legacy we want, create the history we want. Never stop dreaming."

			%}
			<div class="ds_copy">
				<span class="ds_bold">Component</span><br/>
				{% raw %}{% include new_component_library/2layered_center.html %}{% endraw %}
				<div class="highlight">
					include new_component_library/2layered_center.html<br/><br/>

					photo1= "/assets/images/backstage-bw.jpg"<br/>
					photo1-no= "02"<br/>
					photo2= "/assets/images/flowerguy.jpg"<br/>
					photo2-no= "03"<br/><br/>

					caption_title= "02. FLY HIGH!"<br/>
					caption_text= "Our message to the youth is to keep your heads in the clouds.  We need ambitious thinkers. We need fearless dreamers."<br/><br/>

					caption_title2= "03. Go."<br/>
					caption_text2= "Dream hard, dream long. Let's learn and build the lives we want, leave the legacy we want, create the history we want. Never stop dreaming."</br>
			
				</div>
			</div>
		</div>
		<div class="ds_component">
			{%	include

				new_component_library/2layered_horizontal.html

				photo1= "/assets/images/project_popupmuseum/popupmuseum-3.jpg"
				photo1-no= "02"
				photo2= "/assets/images/project_popupmuseum/popupmuseum-4.jpg"
				photo2-no= "03"

				caption_title= "02. FLY HIGH!"
				caption_text= "Our message to the youth is to keep your heads in the clouds.  We need ambitious thinkers. We need fearless dreamers."

				caption_title2= "03. Go."
				caption_text2= "Dream hard, dream long. Let's learn and build the lives we want, leave the legacy we want, create the history we want. Never stop dreaming."

			%}
			<div class="ds_copy">
				<span class="ds_bold">Component</span><br/>
				{% raw %}{% include new_component_library/2layered_horizontal.html %}{% endraw %}
				<div class="highlight">
					include new_component_library/2layered_horizontal.html<br/><br/>

					photo1= "/assets/images/project_popupmuseum/popupmuseum-3.jpg"<br/>
					photo1-no= "02"<br/>
					photo2= "/assets/images/project_popupmuseum/popupmuseum-4.jpg"<br/>
					photo2-no= "03"<br/>

					caption_title= "02. FLY HIGH!"<br/>
					caption_text= "Our message to the youth is to keep your heads in the clouds.  We need ambitious thinkers. We need fearless dreamers."<br/>

					caption_title2= "03. Go."<br/>
					caption_text2= "Dream hard, dream long. Let's learn and build the lives we want, leave the legacy we want, create the history we want. Never stop dreaming."</br>
			
				</div>
			</div>
		</div>
		<div class="ds_component">
			{%	include new_component_library/2layered_vertical.html 
	
				photo1="/assets/images/project_popupmuseum/popupmuseum-3.jpg" 
				photo1-no= "02" 
				photo2="/assets/images/project_popupmuseum/popupmuseum-4.jpg"
				photo2-no= "03" 
				caption_title= "02. FLY HIGH!"
				caption_text= "Our message to the youth is to keep your heads in the clouds.  We need ambitious thinkers. We need fearless dreamers."

				caption_title2= "03. Go."
				caption_text2= "Dream hard, dream long. Let's learn and build the lives we want, leave the legacy we want, create the history we want. Never stop dreaming."
			%}
			<div class="ds_copy">
				<span class="ds_bold">Component</span><br/>
				{% raw %}{% include new_component_library/2layered_vertical.html %}{% endraw %}
				<div class="highlight">
					include new_component_library/2layered_vertical.html<br/> <br/>
	
					photo1="/assets/images/project_popupmuseum/popupmuseum-3.jpg" <br/>
					photo1-no= "02" <br/>
					photo2="/assets/images/project_popupmuseum/popupmuseum-4.jpg"<br/>
					photo2-no= "03" <br/>
					caption_title= "02. FLY HIGH!"<br/>
					caption_text= "Our message to the youth is to keep your heads in the clouds. We need ambitious thinkers. We need fearless dreamers."<br/><br/>
					caption_title2= "03. Go."<br/>
					caption_text2= "Dream hard, dream long. Let's learn and build the lives we want, leave the legacy we want, create the history we want. Never stop dreaming."<br/>
			
				</div>
			</div>
		</div>
	</div>
	<div class="ds_item_wrapper" id="artist-note">
		<div class="ds_title">Artist Note</div>
		{%	include new_component_library/artist-note.html %}
		<div class="ds_copy">
			This is used on the home page optionally.  A note to our readers and followers.<br/><br/>
			{% raw %}{% include new_component_library/artist-note.html %}{% endraw %}
			
		</div>
	</div>
	<div class="ds_item_wrapper" id="captions">
		<div class="ds_title">Captions</div>
		{%	include new_component_library/captions.html
			caption_title="02. FLY HIGH!" caption_text= "Our message to the youth is to keep your heads in the clouds.  We need ambitious thinkers. We need fearless dreamers."
			caption_title2= "03. Go." caption_text2= "Dream hard, dream long. Let's learn and build the lives we want, leave the legacy we want, create the history we want. Never stop dreaming."
		%}
		<div class="ds_copy">
			This is used on the home page optionally.  A note to our readers and followers.
			<div class="highlight">
				include new_component_library/captions.html <br/><br/>
				caption_title="02. FLY HIGH!" caption_text= "Our message to the youth is to keep your heads in the clouds.  We need ambitious thinkers. We need fearless dreamers." <br/><br/>
				caption_title2= "03. Go." caption_text2= "Dream hard, dream long. Let's learn and build the lives we want, leave the legacy we want, create the history we want. Never stop dreaming."
			</div>
		</div>
	</div>
	<div class="ds_item_wrapper" id="catalog-group">
		<div class="ds_title">Catalog Group</div>
		{% include new_component_library/catalog_group.html season="3" %}
		<span class="ds_bold">Component</span><br/>
		{% raw %}{% include new_component_library/catalog_group.html season="3" %}{% endraw %}
		<div class="ds_copy">
			The parameter "season" can be optionally changed from 1 to 3 and will show a different group of projects from the SVNCRWNS catalog.
		</div>
	</div>
	<div class="ds_item_wrapper" id="content-block">
		<div class="ds_title">Content Block</div>
		{% 	include new_component_library/content-block.html
		  	title="Creative<br/>Direction"
		  	text="Here's a little story, it goes like this..."
		%}
		<span class="ds_bold">Component</span><br/>
		{% raw %}{% include new_component_library/content-block.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/content-block.html<br/>
		  	title="Creative<br/>Direction"<br/>
		  	text="Here's a little story, it goes like this..."<br/>
		</div>
	</div>
	<div class="ds_item_wrapper" id="copy">
		<div class="ds_title">Copy</div>
		{% 	include new_component_library/copy.html 
			title="activation" 
			text="SVNCRWNS partnered with Sankofa African and World Bazaar to create a Pop-Up Museum for Black History Month, entitled, SANKOFA. The word Sankofa means “to go back and get it”. With that in mind, we created a field trip to invite the youth of a few Baltimore City Public Schools to visit and experience our Pop-Up Museum to learn about black history and art prior to the teachings of American history.<br/><br/> At SANKOFA, we were able to have a hands-on experience with authentic African art, instruments, an installation of clouds, story time, clothing, and more." 
		%}
		<span class="ds_bold">Component</span><br/>
		{% raw %}{% include new_component_library/copy.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/copy.html <br/><br/>
			title="activation" <br/>
			text="SVNCRWNS partnered with Sankofa African and World Bazaar to create a Pop-Up Museum for Black History Month, entitled, SANKOFA. The word Sankofa means “to go back and get it”. With that in mind, we created a field trip to invite the youth of a few Baltimore City Public Schools to visit and experience our Pop-Up Museum to learn about black history and art prior to the teachings of American history.<br/><br/> At SANKOFA, we were able to have a hands-on experience with authentic African art, instruments, an installation of clouds, story time, clothing, and more." <br/>
		</div>
	</div>
	<div class="ds_item_wrapper" id="credits">
		<div class="ds_title">credits</div>
		{%	include

			new_component_library/credits.html

			data-credits-list="pop-up-sankofa-credits"
		%}
		<div class="ds_copy">
			{% raw %}{% include new_component_library/credits.html %}{% endraw %}
			<div class="highlight">
				include new_component_library/credits.html<br/><br/>
				data-credits-list="pop-up-sankofa-credits"
			</div>
		</div>
	</div>
	<div class="ds_item_wrapper" id="cta">
		<div class="ds_title">CTA</div>
		{% 	include new_component_library/dynamic-cta.html 
			title="review portfolio"
			text="our work ranges from art installations, films, web design + development, editorial + still photography to brand strategy, marketing and campaigns.  The common thread within all our work is connecting brands to community through activation and design."
			link-text="Featured Work"
			link-url="/featured"
		%}
		{% raw %}{% include new_component_library/dynamic-cta.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/dynamic-cta.html <br/><br/>
			title="review portfolio"<br/>
			text="our work ranges from art installations, films, web design + development, editorial + still photography to brand strategy, marketing and campaigns.  The common thread within all our work is connecting brands to community through activation and design."<br/>
			link-text="Featured Work"<br/>
			link-url="/featured"	<br/>
		</div>
	</div>
	<div class="ds_item_wrapper" id="film">
		<div class="ds_title">Film</div>
		{%	include new_component_library/film.html

			film-no= "7"
			film-photo= "/assets/images/project_popupmuseum/popupmuseum-8.jpg"
			film-url= "https://player.vimeo.com/video/198145423?api=1"

			caption_title= "07. Pop-Up Museum Visual"
			caption_text= "A recap of the setup and execution of SANKOFA. 6 min 28 sec."
		%}
		{% raw %}{% include new_component_library/film.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/film.html<br/><br/>

			film-no= "7"<br/>
			film-photo= "/assets/images/project_popupmuseum/popupmuseum-8.jpg"<br/>
			film-url= "https://player.vimeo.com/video/198145423?api=1"<br/>

			caption_title= "07. Pop-Up Museum Visual"<br/>
			caption_text= "A recap of the setup and execution of SANKOFA. 6 min 28 sec."<br/>
		</div>
	</div>
	<div class="ds_item_wrapper" id="hero-list">
		<div class="ds_title">Hero w/ List</div>
		{% include 

			new_component_library/hero.html 

			hero-img="/assets/images/black-tv.jpg"
			hero-list="yes"

			caption_title = "02. Kids Exploring <br />@ Pop-Up Museum: Sankofa" 
			caption_text = "A mix of brand strategy and activation are a great recipe for growth and exposure. Connecting with people in the community through common threads is a good start to building relationships around commerce"
			url = "/catalog/pop-up-museum-sankofa"

		%}
		{% raw %}{% include new_component_library/hero.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/hero.html <br/><br/>

			hero-img="/assets/images/black-tv.jpg"<br/>
			hero-list="yes"<br/><br/>
			caption_title = "02. Kids Exploring <br />@ Pop-Up Museum: Sankofa" <br/>
			caption_text = "A mix of brand strategy and activation are a great recipe for growth and exposure. Connecting with people in the community through common threads is a good start to building relationships around commerce"
			url = "/catalog/pop-up-museum-sankofa"<br/>
		</div>
	</div>
	<div class="ds_item_wrapper" id="hero-content">
		<div class="ds_title">Hero w/ Content</div>
		{% include 

			new_component_library/hero.html 

			hero-img="/assets/images/black-tv.jpg"
			content="end."

			caption_title = "02. Kids Exploring <br />@ Pop-Up Museum: Sankofa" 
			caption_text = "A mix of brand strategy and activation are a great recipe for growth and exposure. Connecting with people in the community through common threads is a good start to building relationships around commerce"
			url = "/catalog/pop-up-museum-sankofa"

		%}
		{% raw %}{% include new_component_library/hero.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/hero.html <br/><br/>

			hero-img="/assets/images/black-tv.jpg"<br/>
			content="end."<br/><br/>
			caption_title = "02. Kids Exploring <br />@ Pop-Up Museum: Sankofa" <br/>
			caption_text = "A mix of brand strategy and activation are a great recipe for growth and exposure. Connecting with people in the community through common threads is a good start to building relationships around commerce"
			url = "/catalog/pop-up-museum-sankofa"<br/>
		</div>
	</div>
	<div class="ds_item_wrapper" id="page-title">
		<div class="ds_title">Page Title</div>
		{% include new_component_library/page_title.html 
			page_title=	"featured<br/>work"
			page_subtitle= "7 most recent projects" 
		%}
		{% raw %}{% include new_component_library/page_title.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/page_title.html <br/><br/>
			page_title=	"featured<br/>work"<br/>
			page_subtitle= "7 most recent projects"<br/>
		</div>
	</div>
	<div class="ds_item_wrapper" id="primary-hero">
		<div class="ds_title">Primary Hero</div>
		{% 	include new_component_library/primary_hero.html 
			primary_hero="/assets/images/tmp-film-crew.jpg" 
		%}
		{% raw %}{% include new_component_library/primary_hero.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/primary_hero.html <br/>
			primary_hero="/assets/images/tmp-film-crew.jpg" 
		</div>
	</div>
	<div class="ds_item_wrapper" id="secondary-menu">
		<div class="ds_title">Secondary Menu</div>
		{% include new_component_library/section_menu.html %}
		{% raw %}{% include new_component_library/section_menu.html %}{% endraw %}
	</div>
	<div class="ds_item_wrapper" id="single-image">
		<div class="ds_title">Single Image</div>
		{%	include new_component_library/single_image.html

			photo1= "/assets/images/neptune-final-9.jpg"
			photo1-no= "6"

			caption_title= "07. Pop-Up Museum Visual"
			caption_text= "A recap of the setup and execution of SANKOFA. 6 min 28 sec."

		%}
		{% raw %}{% include new_component_library/single_image.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/single_image.html<br/><br/>

			photo1= "/assets/images/neptune-final-9.jpg"<br/>
			photo1-no= "6"<br/><br/>

			caption_title= "07. Pop-Up Museum Visual"<br/>
			caption_text= "A recap of the setup and execution of SANKOFA. 6 min 28 sec."<br/>
		</div>	
	</div>
	<div class="ds_item_wrapper" id="slide-video">
		<div class="ds_title">Slider (w/ Video)</div>
		{%	include new_component_library/slide.html

			slide1="/assets/images/featured-body-hero3.png"
			slide2="/assets/images/hero_home3.png"
			slide3="/assets/images/backstage-bw.jpg"
			slide4="/assets/images/project_collabmore/collabmore-bg.png"
		%}
		{% raw %}{%	include new_component_library/slide.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/slide.html<br/><br/>

			slide1="/assets/images/featured-body-hero3.png"<br/>
			slide2="/assets/images/hero_home3.png"<br/>
			slide3="/assets/images/backstage-bw.jpg"<br/>
			slide4="/assets/images/project_collabmore/collabmore-bg.png"<br/>
		</div>
	</div>
	<div class="ds_item_wrapper" id="subscribe">
		<div class="ds_title">subscribe</div>
		{% 	include new_component_library/subscribe.html 
			title="Stay in the loop."
			text="We'll be sharing opportunities that we're working on, which means more opps where we can work with you.  Stay tuned, and subscribe to our email&nbsp;list."
		%}
		{% raw %}{% include new_component_library/subscribe.html %}{% endraw %}
		<div class="highlight">
			include new_component_library/subscribe.html <br/><br/>
			title="Stay in the loop."<br/>
			text="We'll be sharing opportunities that we're working on, which means more opps where we can work with you.  Stay tuned, and subscribe to our email&nbsp;list."<br/>
		</div>
	</div>
	<div class="ds_item_wrapper" id="upcoming">
		<div class="ds_title">Upcoming Events</div>
		{% include new_component_library/upcoming_events.html %}
		{% raw %}{% include new_component_library/upcoming_events.html %}{% endraw %}
	</div>
	<div class="ds_item_wrapper">
		<div class="ds_title">Slides</div>
		<div class="ds_component">
			<div class="ds_component_title" id="intro-slide">Intro Slide</div>
			<div class="svn-slider">
				{% 	include slide_library/partial-intro-slide.html 
					intro-slide_img= "/assets/images/kh-1.jpg"
					intro-slide_copy= "On a warm and cloudy evening, before the rain poured out of the clouds, the sky was a bright, beautiful orange with shadows of green - a rainbow before the storm. Featuring Chavon and her kimono."
				%}
				
			</div>
			{% raw %} {% include slide_library/partial-intro-slide.html %} {% endraw %}
				<div class="highlight">
					include slide_library/partial-intro-slide.html <br/><br/>
					intro-slide_img= "/assets/images/kh-1.jpg"<br/>
					intro-slide_copy= "On a warm and cloudy evening, before the rain poured out of the clouds, the sky was a bright, beautiful orange with shadows of green - a rainbow before the storm. Featuring Chavon and her kimono."
				</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title" id="full-slide">Full Width Slide</div>
			<div class="svn-slider">
				{%	include slide_library/partial-full-width-slide.html 
					full-width_img="/assets/images/kh-2.jpg"
				%}
			</div>
			{% raw %}{% include slide_library/partial-full-width-slide.html %}{% endraw %}
			<div class="highlight">
				include slide_library/partial-full-width-slide.html <br/><br/>
				full-width_img="/assets/images/kh-2.jpg"
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title" id="one-slide">One in One Slide</div>
			<div class="svn-slider">
				{%	include slide_library/partial-one-in-one-slide.html 
					one-in-one_img-cover="/assets/images/kh-3.jpg"
					one-in-one_img-inner="/assets/images/kh-4.jpg"
				%}
			</div>
			{% raw %}{%	include slide_library/partial-one-in-one-slide.html %}{% endraw %}
			<div class="highlight">
				include slide_library/partial-one-in-one-slide.html <br/><br/>
				one-in-one_img-cover="/assets/images/kh-3.jpg"<br/>
				one-in-one_img-inner="/assets/images/kh-4.jpg"
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title" id="two-slide">Two Plus One Slide</div>
			<div class="svn-slider">
				{%	include slide_library/partial-two-plus-one-slide.html
					twoplus_img1= "/assets/images/kh-6.jpg"
					twoplus_img2="/assets/images/kh-7.jpg"
					oneplus_img3="/assets/images/kh-6.jpg"
				%}
			</div>
			{% raw %}{% include slide_library/partial-two-plus-one-slide.html %}{% endraw %}
			<div class="highlight">
				include slide_library/partial-two-plus-one-slide.html<br/><br/>
					twoplus_img1= "/assets/images/kh-6.jpg"<br/>
					twoplus_img2="/assets/images/kh-7.jpg"<br/>
					oneplus_img3="/assets/images/kh-6.jpg"<br/>
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title" id="three-slide">Three Fold Slide</div>
			<div class="svn-slider">
				{%	include slide_library/partial-three-fold-slide.html
					three-fold-slide_img1= "/assets/images/kh-6.jpg"
					three-fold-slide_img2="/assets/images/kh-7.jpg"
					three-fold-slide_img3="/assets/images/kh-6.jpg"
				%}
			</div>
			{% raw %}{%	include slide_library/partial-three-fold-slide.html %}{% endraw %}
			<div class="highlight">
				include slide_library/partial-three-fold-slide.html<br/><br/>
				three-fold-slide_img1= "/assets/images/kh-6.jpg"<br/>
				three-fold-slide_img2="/assets/images/kh-7.jpg"<br/>
				three-fold-slide_img3="/assets/images/kh-6.jpg"
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title" id="fin-slide">Fin Slide</div>
			<div class="svn-slider">
				{%	include slide_library/partial-fin-slide.html
					fin-slide_img="/assets/images/project_chasingtheorangesky/ctos-9.jpg"
				%}
			</div>
			{% raw %}{% include slide_library/partial-fin-slide.html %}{% endraw %}
			<div class="highlight">
				include slide_library/partial-fin-slide.html<br/><br/>
				fin-slide_img="/assets/images/project_chasingtheorangesky/ctos-9.jpg"
			</div>
		</div>
		<div class="ds_component">
			<div class="ds_component_title" id="credits-slide">Credits Slide</div>
			<div class="svn-slider">
				{%	include slide_library/partial-credits-slide.html 
					data-credits-list="pop-up-sankofa-credits"
				%}
			</div>
			{% raw %}{% include slide_library/partial-credits-slide.html  %}{% endraw %}
			<div class="highlight">
				include slide_library/partial-credits-slide.html <br/><br/>
				data-credits-list="pop-up-sankofa-credits"
			</div>
		</div>
	</div>
	<div class="ds_item_wrapper">
		<div class="ds_title" id="featured-work">
			Featured Work
		</div>
		{% include featured-work.html %}
	</div>

</section>
</div>

</main>
<!-- main-content -->

<nav id="side-nav">
	<div class="page_wrapper">
	<ul class="navigation single-item-wrapper">
	    <li><a href="#framework">Framework</a></li>
	    <li><a href="#colors-fonts">Colors + Fonts</a></li>
	    <li><a href="#layouts">Layouts</a></li>
	</ul>
	  <!-- single-item-wrapper -->
  <ul class="navigation">
    <li class="item-has-children corn">
      <a class="js-link" href="#components">Components</a>
      <ul class="sub-menu corn-sub">
        <li><a href="#two-column-content">Two-Column Content</a></li>
        <li><a href="#artist-note">Artist Note</a></li>
        <li><a href="#captions">Captions</a></li>
        <li><a href="#catalog-group">Catalog Group</a></li>
        <li><a href="#content-block">Content Block</a></li>
        <li><a href="#copy">Copy</a></li>
        <li><a href="#credits">Credits</a></li>
        <li><a href="#cta">CTA</a></li>
        <li><a href="#film">Film</a></li>
        <li><a href="#hero-list">Hero w/ List</a></li>
        <li><a href="#hero-content">Hero w/ Content</a></li>
        <li><a href="#page-title">Page Title</a></li>
        <li><a href="#primary-hero">Primary Hero</a></li>
        <li><a href="#secondary-menu">Secondary Menu</a></li>
        <li><a href="#single-image">Single Image</a></li>
        <li><a href="#slider-video">Slider w/ Video</a></li>
        <li><a href="#subscribe">Subscribe</a></li>
        <li><a href="#upcoming">Upcoming Events</a></li>
      </ul>
    </li>
    <!-- item-has-children -->

    <li class="item-has-children tomato">
      <a href="#slide-partials">Slide Partials</a>
      <ul class="sub-menu tomato-sub">
        <li><a href="#intro-slide">Intro Slide</a></li>
        <li><a href="#full-slide">Full Width Slide</a></li>
        <li><a href="#one-slide">One in One Slide</a></li>
        <li><a href="#two-slide">Two Plus One Slide</a></li>
        <li><a href="#three-slide">Three Fold Slide</a></li>
        <li><a href="#fin-slide">Fin Slide</a></li>
        <li><a href="#credits-slide">Credits Slide</a></li>
      </ul>
    </li>
    <!-- item-has-children -->
  </ul>
  <!-- navigation -->

  <ul class="navigation single-item-wrapper">
	    <li><a href="#0">Featured Work</a></li>
	</ul>

  <div class="navigation socials">
    <a class="fa fa-twitter" href="#0"></a>
    <a class="fa fa-github" href="#0"></a>
    <a class="fa fa-facebook" href="#0"></a>
    <a class="fa fa-google-plus" href="#0"></a>
  </div>
  <!-- socials -->
</div>
</nav>