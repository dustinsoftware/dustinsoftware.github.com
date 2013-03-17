---
comments: true
date: 2012-12-15 23:22:57
layout: post
slug: touchscreen-x10-cool-light-switch
title: Touchscreen + X10 = Cool Light Switch
wordpress_id: 52
---

[![20121215-231749.jpg](http://dustinsoftware.files.wordpress.com/2012/12/20121215-231749.jpg)](http://dustinsoftware.files.wordpress.com/2012/12/20121215-231749.jpg)

I currently acquired (my wife got me for Christmas!) an 8-bit touchscreen and Arduino Mega to use with a project that didn't exist yet. What totally awesome project needed a 2.8" TFT touchscreen? This touchscreen was too slow to draw rapid updates to (think about 2 seconds to draw the entire screen), so it had to be an interface to something else. It was then I remembered about a X10 firecracker I had lying around. I had previously wired it up to control the lights in my dorm room, using a 7" LCD screen and a keypad as the interface to a Windows box, which talked to a Linux box, which talked to the firecracker. This new addition meant I could just talk to the firecracker directly.

<!-- more -->

So I went ahead and fired up the Arduino IDE and began coding an interface. The first test was to get the touchscreen to report the coordinates of wherever it detects a touch. The libraries provided were very basic, which was good, as I wanted to have as much control over how my program worked as I could reasonably have. The TFT library contained a few functions to draw basic shapes with a color, and the X10Firecracker library provided the functions needed to send commands. The rest was up to me.

The particularly challenging part of this project was designing a user interface from scratch. Drawing the user buttons, detecting when a user was pressing a button once, and ignoring multiple presses took a little bit of work to get right. Sending the signals to the firecracker takes about a second, so I added a queue in to accept more commands while it was still sending something. I also left one of the debugging functions in the program-wherever you touch the screen it draws a small white square. After 10 seconds of inactivity, the screen redraws the buttons.

Overall, the project took about 8 hours from start to finish. I posted the source (including the libraries) on github, for those interested in how I pulled it off.

[Source code](https://github.com/dustinsoftware/Arduino/tree/master/x10_touchscreen)
