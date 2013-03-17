---
layout: page
title: Dustin's Awesome Programming Blog
tagline: 
---
{% include JB/setup %}

This is the personal blog of Dustin Masters.  Read more about me on the [About Page](about.html).

---

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

