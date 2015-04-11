/*
    HTTP CLIENT
    Exercise 7 of 13

    Write a program that performs an HTTP GET request to a URL provided to you
    as the first command-line argument. Write the String contents of each
    "data" event from the response to a new line on the console (stdout).

    http.get() method is a shortcut for simple GET requests, use it to simplify
    your solution. The first argument to http.get() can be the URL you want to
    GET; provide a callback as the second argument.
    Unlike other callback functions this one has the signature:
*/
//      function callback (response) { /* */ }
/*
    Where a response object is a Node Stream object. you can treat Node Streams
    as objects that emit events. The three events that are of most interest are:
    "data", "error" and "end". You list to an event like so:
*/
//      response.on("data", function (data) { /* */ })  
/*
    The "data" event is emitted when a chunk of data is available and can be 
    processed. The size of the chunk depends upon the underlying data source.
     
    The response object / Stream that you get from http.get() also has a 
    setEncoding() method. If you call this method with "utf8", the "data"
    events will emit Strings rather than the standard Node Buffer objects which
    you have to explicitly convert to Strings.
*/

var http = require('http');

http.get( process.argv[2], function ( response ) {
    
    response.on( "data", function( data ) {
        console.log( data );
    }).setEncoding( 'utf8' );
    
    response.on( "error", function( err ) {
        console.error( err );
    }).setEncoding( 'utf8' );
});


/*
//  official solution

    var http = require('http')
  
    http.get(process.argv[2]. function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })

 */