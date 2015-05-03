# darrenk-nodeschool-solutions
This repo contains the solutions I've bodged together for nodeschool.io's learnyounode exercises in an attempt to teach myself programming.
The solutions presented here have each successfully solved the related exercises' problem, so you know they 'work' given those conditions.
Honestly I'm learning tonnes with every exercise; from my failed attempts, comparing solutions and reading more about JavaScript.
I've also taken to re-writing other peoples solutions to drill into my mind why they have done things that I have not.

## Lessons I have learned so far

 * Node code looks wierd to me - I understand that statements in JavaScript need not end with a semi-colon when the statements are written with appropriate consideration.
    However I do not yet understand this well enough to trust myself writing javascript in such a style.
 * My first solutions tend to be long-winded, uninformed botch-jobs.
 * I am beginning to understand why callbacks are awesome. :O
 * the Array.prototype.forEach is a new iterator for me which I love using in place of my go-to for loop. (i.e. for ( i=0; i<array.length; i++ ) {/* do stuff */} ) 
 * js bits that I've learned:
 * what process.argv is and how to use it.
 * Array.prototype.filter
 * Array.prototype.push
 * what 'fs' is.
 * fs.readFileSync(), fs.readFile(), fs.readdir()
 * what 'path' is, path.extname
 * how to write a simple one function module for node.js and use it in a program (toughest exercise for me so far, largest dividends!)
 * That I drastically need to get more familiar (i.e. learn!) how to Structure One's Project Files Properly, so other people can quickly understand what's steaming the spinach.
 
 So far I'm about half-way through the learnyounode exercises and I must say that even now I want to revisit my earlier solutions to apply what I have learned!
 
 ### Notes
 
 When I completed lesson 6 I went and made rollchar, a node.js version of a small long-shelved javascript project. http://github.com/darrenknet/rollchar
 Then I completed lesson 7. After my reading of the various documentation for this exercise, and some perusale of various helper modules, I've decided to write my own node.js server that routes and serves a new and improves rollchar web app.
 
 My solution for exercise 9 (juggling async) was written to be used with at least one argument as a pointer for the http get request to get some data from. However I wrote it in such a way as it can be given as many url arguments as you wish, however I have not tested it outside of the learnyounode environment and am unsure how it would react to many connections or errors.