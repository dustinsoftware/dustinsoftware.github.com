---
date: 2013-5-2
layout: post
slug: linqtosql
title: Don't Use Linq-To-Sql
---

If you're using Linq-to-Sql to solve your problem, you're doing it wrong.  

I recently worked on migrating one of our databases to a new schema.  The simplified version of this process was to take data out of the database, transform it with .net code, and stuff it in some new tables.

For this task, I chose use Linqpad, which uses linq to sql to talk to the database.  The process looks something like this: The migration logic talks to linq to sql, linq to sql magically generates SQL and talks to SQL server.  Linq to sql is reasonably fast, so what could go wrong?
 
Well, we had 1.3 Million rows that needed to be migrated to the new schema, and Linq to sql was performing at a speed of around 273 rows per minute.  Which means there would be a best case running time of around 79 *hours*.  That’s not too awful, but after running the app for 15 hours I discovered that at the rate it was going, it would take roughly 1 week to complete its task.  Surely we can do better than that.

Well as it turns out we can.  I went ahead and re-wrote the logic using Dapper dot net and hand-written SQL queries so I could extract just the information I needed and nothing more.  With this new implementation, the app ran at a speed of about 100 rows per second, about 22 times the speed it was running at before.  This had an estimated completion time of 7 hours and an actual completion time of 10 hours, so not too far off.

The moral of this story?   Don't use Linq-To-Sql when better (read: faster) alternatives exist.
