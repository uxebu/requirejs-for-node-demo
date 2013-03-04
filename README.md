What to try?
============
The CLI env should work, try like this:

```
> node ./src/cli.js
```

and the test env should work, do

```
> npm test
```

Goal
====

This project wants to demonstrate the correct use of requirejs for node.js
projects, including all edge cases, and serves for documenting how we (in uxebu)
use the setup.
It shall include the pure setup, test execution and building.
If any new edge cases come up, they shall be added here, so we always
have one demo ref that is testable and shows how to use the setup correctly.
If anything is missing feel free to open a ticket.

This projects lends the setup from a real world project, that we use
for extracting swf meta data from a swf file, like what swf version is used,
what actionscript version is used etc.

Setup
=====

This project si self containing, it contains all node-modules, so no `npm install` is
needed, so you can get started asap. This is not how a project shall be run, you should
use `npm install` in real projects to set it up and get it running.
Here everything is included for convinience only!

In order to not require another repo, to 'simulate' an external dependency, we have
a directory 'external-modules' which contains all files that "look" like this,
this is referenced in the requireSetup.js, which is used to setup all the require config.
