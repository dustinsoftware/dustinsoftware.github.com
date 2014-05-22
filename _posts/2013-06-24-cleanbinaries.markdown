---
date: 2013-6-13
layout: post
slug: cleanbinaries
title: Avoiding building against old binaries
---

Often, when moving projects to a new solution, you may forget to add all the required projects to your solution, even though it builds fine after doing a "Rebuild Solution".

Clean solution won't clean binaries the solution doesn't know about, so you can either open up all the solutions in your code directory and perform a "Clean Solution", or execute this command in the root of your code directory, which will wipe out all the bin and obj folders it finds, recursively:

`for /d /r . %d in (bin,obj) do @if exist "%d" rd /s/q "%d"`

Or, from a batch script:

```for /d /r . %%d in (bin,obj) do @if exist "%%d" rd /s/q "%%d"```

Now, Visual Studio will fail to build until you add the missing project to your solution.