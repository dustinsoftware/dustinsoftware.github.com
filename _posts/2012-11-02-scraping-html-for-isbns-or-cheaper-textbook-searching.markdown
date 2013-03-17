---
comments: true
date: 2012-11-02 07:01:43
layout: post
slug: scraping-html-for-isbns-or-cheaper-textbook-searching
title: Scraping HTML for ISBN's, or Cheaper Textbook Searching
wordpress_id: 41
---

Last summer I wanted to see how hard it would be to create a service that finds cheaper textbooks for students attending LeTourneau University.  There was a central website where you could view the textbooks required for your class, but only through the school's exclusive textbook provider, eFollett.  As there are already many textbook finding services, the challenge was to integrate the school's existing system with these third party search engines, all without capturing login credentials.  <!-- more -->

The simplest answer to this problem was to use a bookmarklet, a set of javascript commands saved to a bookmark that can then be executed by the user after a page has loaded.  By calling the bookmarklet on the page that contained all the ISBN's of the student's textbooks, all my script had to do was scrape the page for the ISBN's and redirect them to a landing page that showed all of their purchasing options.  The bookmarklet code is shown below:


> 

>     
>     javascript:(function(){var%20myDoc%20=%20document;var%20fileref=myDoc.createElement('script');fileref.setAttribute('type','text/javascript');fileref.setAttribute('src',%20'http://www.campusbullet.net/scripts/bookstorefix.js');myDoc.getElementsByTagName('head')[0].appendChild(fileref);})();
> 
> 



The PHP code was simple enough once it received the requested ISBN's: use Google's book API to look up the book titles and display an iFrame that contains the selected search engine.  The source for the book search page [is on GitHub](https://github.com/dustinsoftware/Campusbullet/blob/master/application/classes/controller/powersearch.php) can be viewed in action by visiting:


> [ www.campusbullet.net/powersearch?isbn=VALID_ISBN_HERE](http://campusbullet.net/powersearch?isbn=0785212620)


Today's link: [ReSharper](http://www.jetbrains.com/resharper), the best Visual Studio extension you will ever use.
