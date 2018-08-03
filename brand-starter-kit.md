---
layout: phase1-fullpage
title: Brand Starter Kit
permalink: /brand-starter-kit/

masthead_summary: "Take the guess work out of launching and connecting with your audience.  We've got a three-point strategy for your brand."

masthead_mini_number: 3
masthead_mini_subtitle: "the # of opportunities to win"

sellpoints:
- top-level: Visual Product
  image: /assets/images/brandstarterkit_visual.png
  media: film
  link: #
  media_title: "Our Brother's Keeper for Coyote Agency"
  masthead_subtitle: "engaging content"
  big_number: 1
  small_text: minute visual
  number: "one"
  summary: "Video is at the top of the chain when it comes to getting your customers attention.  Visually appealing, you get a story, you get the lifestyle.  Your customer is one step closer to being able to relate to your product, service or message."
- top-level: Online Shop Product
  image: /assets/images/brandstarterkit_onlineshop.png
  media: website
  link: #
  media_title: "Online Shop for City of Gods"
  masthead_subtitle: "a platform to connect"
  big_number: 10+
  small_text: products in e-commerce store
  number: "two"
  summary: "Extend your reach with your products and services.  Most importantly, convert your instagram followers into customers.  Send them to your online shop."
- top-level: Editorial Photos Product
  image: /assets/images/brandstarterkit_editorial.png
  media: content
  link: #
  media_title: "Photography for Shonna Watkins"
  masthead_subtitle: "a platform to connect"
  big_number: 20
  small_text: editorial images
  number: "three"
  summary: "A 2-hour photoshoot to create content for social media, website and other digital tools.  Convert more customers by delivering high resolution images that represent your brand."

info_lists:
- top-level: Info Box 1
  image: /assets/images/brandstarterkit_thewaywild.jpg
  list_title: 5 ideas for video
  media: film
  link: #
  media_title: The Way Wild for Kenn Hall
  list_items:
   - feature: Share the history of your brand
   - feature: Introduce yourself as the founder
   - feature: Introduce a new product or service
   - feature: Highlight your customer's experiences
   - feature: Teach your customers something useful
- top-level: Info Box 2
  image: /assets/images/brandstarterkit_taylorbarbershop.jpg
  list_title: 5 Tips for Online Shops
  media: website
  link: #
  media_title: Booking for Barbers at Taylor's Barbershop
  list_items:
  - feature: Understand your brand identity
  - feature: Detailed product information and gallery
  - feature: Your site is responsive.  Good on all devices
  - feature: Use high resolution images to display your products
  - feature: Have a social media presence, use content to drive traffic

last_call_summary: "The Brand Starter Kit consists of a (1) one minute visual that tells the story of your brand, works as an interactive piece of content and can be the difference between a customer visiting your platform to support your brand; (2) an online shop to feature ten or more products; and (3) a two-hour photoshoot to promote your brand, with high resolution editorial images"
last_call_price: 2500
last_call_link: #
last_call_link_title: Let's get started
---
<div class="grid">
    <div class="lp_masthead">
        <div class="lp_masthead_subtitle">
            learn about our
        </div>
        <div class="lp_masthead_title">
            {{ page.title }}
        </div>
        <div class="lp_masthead_summary">
            {{ page.masthead_summary }}
        </div>
    </div>
    <div class="lp_masthead_mini">
        <div class="lp_masthead_number">
            {{ page.masthead_mini_number }}
        </div>
        <div class="lp_masthead_subtitle">
            {{ page.masthead_mini_subtitle }}
        </div>
    </div>

    {% for sellpoint in page.sellpoints limit:1 %}
    <div class="lp_sell_point">
        <div class="lp_sp_img">
            <img src="{{ sellpoint.image }}" />
            <div class="lp_projectlink">
                See this brand's {{ sellpoint.media }} &mdash; <a href="{{ sellpoint.link }}">{{ sellpoint.media_title }}</a>
            </div>
        </div>
        <div class="lp_sp_content">
            <div class="lp_masthead_subtitle">
                {{ sellpoint.masthead_subtitle }}
            </div>
            <div class="lp_sp_title">
                {{ sellpoint.big_number }}<span>{{ sellpoint.small_text }}</span>
                <div class="lp_sp_number">
                    {{ sellpoint.number}}
                </div>
            </div>
            <div class="lp_sp_summary">
                {{ sellpoint.summary }}
            </div>
        </div>
    </div>
    {% endfor %}

    {% for infolist in page.info_lists limit:1 %}
    <div class="lp_info_box">
        <div class="lp_ib_img">
            <img src="{{ infolist.image }}" />
        </div>
        <div class="lp_info_box_content">
            <div class="lp_info_box_header">
                {{ infolist.list_title }}
            </div>
            <div class="lp_info_box_list">
                <ol>
                    {% for list_item in infolist.list_items %}
                    <li>{{ list_item.feature }}</li>
                    {% endfor %}
                </ol>
            </div>
        </div>
        <div class="lp_projectlink">
            See this brand's {{ infolist.media }} &mdash; <a href="{{ infolist.link }}">{{ infolist.media_title }}</a>
        </div>
    </div>
    {% endfor %}

    {% for sellpoint in page.sellpoints limit:1 offset:1 %}
    <div class="lp_sell_point">
        <div class="lp_sp_img">
            <img src="{{ sellpoint.image }}" />
            <div class="lp_projectlink">
                See this brand's {{ sellpoint.media }} &mdash; <a href="{{ sellpoint.link }}">{{ sellpoint.media_title }}</a>
            </div>
        </div>
        <div class="lp_sp_content">
            <div class="lp_masthead_subtitle">
                {{ sellpoint.masthead_subtitle }}
            </div>
            <div class="lp_sp_title">
                {{ sellpoint.big_number }}<span>{{ sellpoint.small_text }}</span>
                <div class="lp_sp_number">
                    {{ sellpoint.number}}
                </div>
            </div>
            <div class="lp_sp_summary">
                {{ sellpoint.summary }}
            </div>
        </div>
    </div>
    {% endfor %}

    {% for infolist in page.info_lists limit:1 offset:1 %}
    <div class="lp_info_box">
        <div class="lp_ib_img">
            <img src="{{ infolist.image }}" />
        </div>
        <div class="lp_info_box_content">
            <div class="lp_info_box_header">
                {{ infolist.list_title }}
            </div>
            <div class="lp_info_box_list">
                <ol>
                    {% for list_item in infolist.list_items %}
                    <li>{{ list_item.feature }}</li>
                    {% endfor %}
                </ol>
            </div>
        </div>
        <div class="lp_projectlink">
            See this brand's {{ infolist.media }} &mdash; <a href="{{ infolist.link }}">{{ infolist.media_title }}</a>
        </div>
    </div>
    {% endfor %}

    {% for sellpoint in page.sellpoints limit:1 offset:2 %}
    <div class="lp_sell_point">
        <div class="lp_sp_img">
            <img src="{{ sellpoint.image }}" />
            <div class="lp_projectlink">
                See this brand's {{ sellpoint.media }} &mdash; <a href="{{ sellpoint.link }}">{{ sellpoint.media_title }}</a>
            </div>
        </div>
        <div class="lp_sp_content">
            <div class="lp_masthead_subtitle">
                {{ sellpoint.masthead_subtitle }}
            </div>
            <div class="lp_sp_title">
                {{ sellpoint.big_number }}<span>{{ sellpoint.small_text }}</span>
                <div class="lp_sp_number">
                    {{ sellpoint.number}}
                </div>
            </div>
            <div class="lp_sp_summary">
                {{ sellpoint.summary }}
            </div>
        </div>
    </div>
    {% endfor %}

    <div class="lp_lastcall">
        <div class="lp_logo"><img src="/assets/images/crown-black.png" width="30" /></div>
        <div class="lp_masthead_subtitle">
            introducing
        </div>
        <div class="lp_lastcall_title">
            The {{ page.title }}
        </div>
        <div class="lp_lastcall_summary">
            {{ page.last_call_summary }}
        </div>
        <div class="lp_lastcall_price">
            starting at ${{ page.last_call_price }}
        </div>
        <div class="lp_lastcall_cta">
            <a href="#" class="">
                <div>
                    Let's get started
                </div>
            </a>

        </div>
    </div>
</div>
