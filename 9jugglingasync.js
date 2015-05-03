// JUGGLING ASYNC
// Exercise 9 of 13

/*
  This problem is the same as the previous problem however this time you will
  be provided with three URLs as the first three command-line arguments.

  You must first collect the complete content provided to you by each of the
  URLS and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is the you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.
  
  ## HINTS
  Don't expect these three servers to play nicely! They are not going to give
  you complete responses in the order you hope, so you can't naively just print
  the output as you get it because they will be out of order.
  
  You will need to queue the results and keep track of how many of the URLs
  returned their entire contents. Only once you have them all, you can print
  the data to the console.
  
  Counting callbacks is one of the fundamental ways of managing async in Node.
  Rather than doing it by yourself, you may find it more convenient to rely on
  a third-party library such as [async](http://npm.im/async) or 
  [after](http://npm.im/after). But for this exercise, try and do it without
  any external helper library.
  
*/

var http = require('http');
var buffer = [];
var counter = 0;
var total = (process.argv.length - 2); // gets the total number of urls given

// send results to stdout in same order the urls for each request where given
function printOutput() {

  for (var i = 0; i < total; i++) {
    console.log(buffer[i]);
  }
  
}

// perform a http.get request for each url passed to the script
// when all are completed send results
function httpGetAll ( index ) {
  http.get( process.argv[ 2 + index ], function ( response ) {
    response.setEncoding( 'utf8' );
    response.on( 'error', console.error );
    response.on( 'data', function (data) {
      buffer[index].push(data); 
    });
    response.on( 'end', function(data) {
      buffer[index] = buffer[index].join('');
      counter++; // when this iteration is done increase the counter
      if (counter === total) { // check if this is the last iteration
        printOutput();
      }
    });
  }).on('error', console.error); 
}

// iterate over all given arguments assuming all are urls for http.get requests
for (var i = 0; i < total; i++) {
  buffer.push([]); // defines an array within which httpGetAll can .push(data)
  httpGetAll(i);
}