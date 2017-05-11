---
layout            : white-bg
title 						: featured
permalink					: /featured/
---

<!-- for the new featured page - each project is in a wrapper followed by a full width div that contains the divider that aligns left or right -->
<div class="hero-wrapper">
	<div class="title-container">
		<div class="title">featured<br/>work.</div>
	</div>
</div>
<div class="crwns-wrapper clear">
	
	
	
	
	{% include backtop_icon.html %}



{% assign features = site.catalog | where:"featured", "yes" | sort:"featured-rank" %}
{% for project in features limit: 7 %}
	
	{% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
		{% if thecycle == 'odd' %}
	    <div class="svn-wrapper">
	      <div class="svn-content clear">
	        <div class="content_container project_content_featured clear">
	          <div class="content_50 pull_right">
	            <img src="{{ project.img-path }}" />
	          </div>
	          <div class="content_50 content_text project_content_text">
	            chasing the orange sky
	          </div>
	        </div>
	      </div>
	    </div>
	    <div class="svn-wrapper">
	      <div class="svn-content clear">
	        <div class="project_wrapper clear">
	          <div class="project_column_img pull_right">
	            <img src="{{ project.img-path }}" />
	          </div>
	          <div class="project_column_text pull_left">
	          	<div class="something">
	          		<div class="project_content_text2">
	            		chasing the orange sky
	            	</div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	    <!-- need to use display table cell for img align right, and flexbox for OG float left -->
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
</div>