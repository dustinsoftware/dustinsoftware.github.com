---
date: 2013-03-23
layout: post
slug: n64-classic-controller
title: N64 Classic Controller
---

I'm a big fan of the N64 era of video games.  However, the feel of the hard plastic on the control stick has never been that great.  The Wii's classic controller, by contrast, has soft rubber on its control sticks and is relatively nice to use for retro gaming.  So, I began to evaluate what it would take to use a classic controller instead of an N64 controller.

As it turns out, there's already been a fair amount of work done to [use a gamecube controller as an N64 controller](https://github.com/brownan/Gamecube-N64-Controller) and [use a Wiimote with Python as the interpriter](https://github.com/maxpowel/Wii-N64-Controller/blob/master/README.rst).  However, since the Python library doesn't play nicely with the Windows bluetooth stack, I had to develop a solution that worked around Python.

Here was my solution:
* Use [GlovePie](http://glovepie.org/glovepie.php) and [PPJoy](http://ppjoy.bossstation.dnsalias.org/) to make the classic controller show up as a gamepad
* Write a C# app to translate gamepad commands into the 4 bytes the N64 expects from a real controller
* Use serial communication to an Arduino to transfer the 4 bytes to the N64 when it polls for them

Timing was extremely important on the Arduino, so interrupts had to be disabled.  But since serial data received while interrupts are disabled is corrupted or dropped, data can only be sent when the Arduino is expecting it.  To solve this, during the read loop I send 1 byte to the C# app indicating it's ready for input.  The C# app then responds by sending the 4 bytes in its buffer, if it has changed at all since the last read.  The C# app only sends data when it has received the indication that the Arduino is ready for it.

Overall, the project was a tremendous success, and even with two computers sitting between the classic controller and the N64, I was able to get the delay below 20 ms!

[The source code for the entire project is available on GitHub.](https://github.com/dustinsoftware/N64ClassicController)
