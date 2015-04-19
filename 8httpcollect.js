/*
  HTTP COLLECT
  Exercise 8 of 13

  Write a program that performs an HTTP GET request to a URL provided to you as
  the first command-line argument. Collect all data from the server (Not just 
  the first "data" event) and then write two lines to the console (stdout).
  
  The first line you write should be just an integer representing the number of
  characters recieved from the server. The second should contain the complete
  String of characters sent by the server.
*/

// take in url provided in first command line argument
// http get request provided url,
// collect all data from multiple data events (e.g. concat on end)
// print length of number of characters received from server to stdout
// print complete string of characters sent by server

var http = require('http');
var dataArray = [];

http.get( process.argv[2], function ( response ) {
    
    response.setEncoding( 'utf8' );
    response.on( 'data' , function (data) {
        dataArray.push(data); 
        
    });
    response.on( 'error', console.error);
      
    response.on( 'end', function() {
        console.log(
            dataArray
            .join('')
            .length)
        console.log(
            dataArray
            .join('')
            );
    });
  
}).on('error', console.error);