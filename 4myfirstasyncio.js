var fs = require('fs');
var lines = undefined;

function readContents(callback) {
  fs.readFile(process.argv[2], 'utf8', function doneReading(error, fileContents) { // 'uft8' makes it a string
    if (error) return console.error(error);
    // do something with fileContents
    //console.log(fileContents);
    lines = fileContents.split('\n').length - 1; 
    //console.log('lines inside readcontents: ' + lines);
    callback(); // important to use it as a function for invoking purposes, as logLines is the function to invoke
  })
}

function logLines() {
  console.log(lines);
}

readContents(logLines); // triggers readContents, which in turn reads file,
// then manipulates 'line' array, then evokes the callback which triggers
// logLines() function which console.logs the newly manipulated 'lines' array.