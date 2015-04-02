/*

Prints a list of files in a given directory, filtered by the extension of the
files. The first argument is the directory name and the second argument is the
extension filter. Prints the list of files (one file per line) to the console.
Uses asynchronous I/O.

Module Contract

    * Export a single function that takes exactly the arguments described.
    * Call the callback exactly once with an error or some data as described.
    * Don't change anything else, like global variables or stdout.
    * Handle all the errors that may occur and pass them to the callback.
*/



var fs = require('fs');
var path = require('path');

module.exports = function(folderPath, extension, callback) {

  fs.readdir( folderPath, function(err, list) {
  
    if ( err ){
      return callback(err);
    }
  
    // mutate the 'list' array of files with the filter() function returning only true cases (matches to the extension)
    list = list.filter( function(file) {
      return path.extname(file) === '.' + extension;
    });
   
    return callback(null, list);
    
  });
}