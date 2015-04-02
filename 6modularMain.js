
var filterLs = require('./6modularMod.js');

filterLs(process.argv[2], process.argv[3], function (err, list) {
  if ( err ) {
    console.error('There was an error: ', err);
  } 
  
  list.forEach( function(file) {
    console.log(file);
  });
  
});