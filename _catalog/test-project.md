---
layout								: white-bg
title 								: "Test Project"
featured-body-hero 					: "/assets/images/sankofa-kids.jpg"

[//]: # (Featured Info)
featured 							: "yes"
featured-rank 						: "1"
featured-subtitle					: "some random subtext that explains this two word title"
featured-category					: "project"

[//]: # (Catalog All)
catalog-cover-image					: http://via.placeholder.com/1000x1200
season 								: "2"
---

{% include new_component_library/page_title.html page_title="Pop-Up<br/>Art Museum" project_subtitle="we put stamina behind<br/>good strategy and execution." %}

{% include new_component_library/2col_left.html 
	featured-image="https://pixel.nymag.com/imgs/thecut/slideshows/lookbooks/asap-rocky/asap-rocky-2017-01-23.nocrop.w840.h1330.2x.jpg" 
	featured-title="This is art" 
	featured-subtitle= "BCPS students take field trip to interactive art installation, Sankofa" %}

<div class="page_wrapper">
	<div class="frow column-end">

		{% 	include new_component_library/copy.html title="activation" text="SVNCRWNS partnered with Sankofa African and World Bazaar to create a Pop-Up Museum for Black History Month, entitled, SANKOFA. The word Sankofa means “to go back and get it”. With that in mind, we created a field trip to invite the youth of a few Baltimore City Public Schools to visit and experience our Pop-Up Museum to learn about black history and art prior to the teachings of American history.<br/><br/> At SANKOFA, we were able to have a hands-on experience with authentic African art, instruments, an installation of clouds, story time, clothing, and more." %}

		{%	include new_component_library/2layered_vertical.html 
			
			photo1="/assets/images/project_popupmuseum/popupmuseum-3.jpg" 
			photo1-no= "02" 
			photo2="/assets/images/project_popupmuseum/popupmuseum-4.jpg"
			photo2-no= "03" 
			caption_title="02. FLY HIGH!" caption_text= "Our message to the youth is to keep your heads in the clouds.  We need ambitious thinkers. We need fearless dreamers." caption_title2= "03. Go." caption_text2= "Dream hard, dream long. Let's learn and build the lives we want, leave the legacy we want, create the history we want. Never stop dreaming." %}

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

		{%	include

			new_component_library/2layered_stacked.html

			photo1= "/assets/images/project_popupmuseum/popupmuseum-5.gif"
			photo1-no= "04"
			photo2= "/assets/images/project_popupmuseum/popupmuseum-6.jpg"
			photo2-no= "05"

			caption_title= "04. Blue Skys"
			caption_text= "Our message to the youth is to keep your heads in the clouds.  We need ambitious thinkers. We need fearless dreamers."

			caption_title2= "05. Something Old, Something New"
			caption_text2= "The kids enjoyed dressing up with the African clothing. They had pants suits, dresses, scarves, hats and other trinkets to adorn themselves with. And what's a dress up moment, without checking yourself out in the mirror."

		%}

		{%	include

			new_component_library/single_image.html

			photo1= "/assets/images/neptune-final-9.jpg"
			photo1-no= "6"

		%}

		{%	include

			new_component_library/film.html

			film-no= "7"
			film-photo= "/assets/images/project_popupmuseum/popupmuseum-8.jpg"
			film-url= "https://player.vimeo.com/video/198145423?api=1"

			caption_title= "07. Pop-Up Museum Visual"
			caption_text= "A recap of the setup and execution of SANKOFA. 6 min 28 sec."			

		%}

		{%	include 

			new_component_library/slide.html

			slide1="/assets/images/featured-body-hero3.png"
			slide2="/assets/images/hero_home3.png"
			slide3="/assets/images/backstage-bw.jpg"
			slide4="/assets/images/project_collabmore/collabmore-bg.png"

		%}

		{%	include

			new_component_library/credits.html

			data-credits-list="pop-up-sankofa-credits"
		%}


 	</div>
</div>