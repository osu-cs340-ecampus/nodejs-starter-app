# Node.js - Step 2 - Working with the Database

At this point, we have a basically functional full-stack web application. Sure it only runs a single query and just prints it on the screen. But it has a front-end (what the user sees), and back-end (Node.js with Express) along with persistent data storage (MySQL).

We can definitely do more with this, and we will, now.

# Filling the Database with New Data

In this part, in the `database` folder, you will find an SQL file called `bsg_db.sql`. We want to use that file to "load" our database. If you open it up and look at it, its just plain old SQL with a lot of metadata that `mysqldump` generates. It's nothing fancy. Scroll through it and look, there are INSERT and CREATE statements just as if you were adding data line-by-line.

By far the easiest way to add data to the database from an SQL file is using the terminal:

