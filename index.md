---
layout: page
title: Dustin's Coding Adventures
tagline: 
---
{% include JB/setup %}

This is the personal blog of Dustin Masters.  Read more about me on the [About Page](about) or check out my [StackOverflow Careers Profile](http://careers.stackoverflow.com/dustinmasters).

---

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

