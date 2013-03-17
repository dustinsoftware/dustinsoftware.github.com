---
comments: true
date: 2013-02-26 05:43:46
layout: post
slug: blog-moved-to-heroku
title: Wordpress on Heroku!
wordpress_id: 56
---

It's not as tough as you think to get an app running on Heroku.  After being enticed by the free PostgreSQL instance Heroku offers, I couldn't resist setting it up for my website.  After all, having advertisements appear on your own website is pretty lame, to say the least...<!-- more -->

Setting up Wordpress on Heroku is pretty easy.  Steps below:



	
  1. Clone https://github.com/dustinsoftware/heroku-wordpress-svbtle to a new directory.

	
  2. Open a command shell to the cloned directory.

	
  3. Run `heroku create`.  Make sure you have the Heroku Toolbelt already set up.  Heroku should print out "Git remote heroku added" if you did this correctly.  If you don't see this text, make sure you are in the directory you cloned, not its parent.

	
  4. Stage all the files by typing `git add .` and then commit them with `git commit`.  Type in `Initial commit` as your commit message.

	
  5. Run `git push heroku master`.  Heroku should now inform you that your app has been deployed.

	
  6. Run `heroku addons:add heroku-postgresql:dev`.  Heroku should let you know that a database has been created, named something like HEROKU_POSTGRESQL_BLUE_URL.  Remember this name, yours will likely look different.

	
  7. Run `heroku pg:promote HEROKU_POSTGRESQL_BLUE_URL` to promote your database to DATABASE_URL.

	
  8. Finally, visit your site at the deployed URL.  Set up a username and password and you're done!


**A few considerations: **Wordpress is running is running from a directory that is **read-only**.  You can make posts and change settings, but image hosting will need to be done from a different service (try imgur).  You can also set it up to work with your own domain name, like I've done with mine.

**Huge **thanks to the original author that I learned this from, James Onley!  [His website is linked to here](http://blog.webjames.co.uk/hosting-a-wordpress-blog-on-heroku-with-the-svbtle-theme-for-free/201/).
