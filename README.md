# Bethany Brown Portfolio site (Middleman)

#### Includes:
* Bootstrap 3
* Sass + Compass
* Modernizer.js
* HTML5 Shiv
* Heroku push/deploy support


## Requirements/Dependencies/Tech Used
This project requires OSX or Linux, with Ruby and a few gems. It may run on Windows, but this is untested.

### JQuery
Uses Google CDN

### Ruby
Requires Ruby version 2.0 or greater. For details on installing Ruby (we suggest RVM), see [the RVM page](https://rvm.io/).


## Installation/Setup/Configuration
Once you have the Middleman gem installed and before you start working on the project, run:
```bash
$ cd {path_to_project}
$ bundle
```

This will install all the needed dependencies and gems listed in the `.Gemfile` to get you up and running with Middleman.


## Running
Since we are using Middleman, you need to run the server to view the page. Do do this run:

```bash
$ middleman
```

## Development
You can customize the Bootstrap configuration by editing: `source/css/bootstrap/_bootstrap.scss` and `source/css/bootstrap/_variables.scss`
This is the easiest way that I have found to quickly set up a static site with Bootstrap, Sass, Compass, and Middleman.

## Building/Deployment

To build the project, quit the server with `ctrl-c`
Then run:
```bash
$ middleman build
```
This will run the Middleman build task and generate all of the necessary files. The output of the build command will reside in a `tmp` directory at the root of the project.

## Deploying to Heroku

Add the remote to your working copy:
```bash
$ git remote add heroku git@heroku.com:beeeees.git
```

Ensure you have the remote added to your working copy:
```bash
$ git remote -v
heroku  git@heroku.com:beeeees.git (fetch)
heroku  git@heroku.com:beeeees.git (push)

```

This should output the remotes of the project. One should be called `heroku` and point to the Heroku staging subdomain.

Use the following command to push to Heroku:
```bash
$ git push heroku master

```

## Project Contacts

- Developer - [Bethany](https://github.com/beeeees)