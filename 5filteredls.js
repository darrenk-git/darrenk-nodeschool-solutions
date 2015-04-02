// FILTERED LS
// Create a program that prints a list of files in a given directory, filtered by the extension of the files. 
// You will be provided a directory name as the first argument to our program (e.g. '/path/to/dor') 
// and a file extension to filter by the second argument.
//
// For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with '.txt'.
// Note that the second argument will not come prefixed with a '.'.
// 
// The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

var fs = require('fs');
var filter = process.argv[3];
var filtered = undefined; // defining this now to avoid error as it is used later within a callback

function readDirectory(callback) {
  
  fs.readdir(process.argv[2], function doneReadingDir(err, list) {
    
    filtered = list.filter(isFileExtension); // filtered is a new array of elements created from the list array. It is earlier defined and now changed to avoid reference error
    callback(); // evoke the callback
    
    }
  );
}

function isFileExtension(element) {
  if (element.indexOf('.' + filter) !== -1) {  // returns false if no match
    // console.log('Filter match!: ' + element + ' to ' + filter) // debug
    return element;                                   // returns the element, adding it to the new array
  } else {
    // console.log('Does not filter: ' + element) // debug
  }
  
}

function logFilteredList() {
  
  function logArrayElement(element, index, array) {
    console.log(element);  
  }
  
  filtered.forEach(logArrayElement);
}

readDirectory(logFilteredList);
