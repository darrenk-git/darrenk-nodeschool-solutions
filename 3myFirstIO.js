var fs =  require('fs');

var file = fs.readFileSync(process.argv[2]).toString().split('\n');
var total_lines = 0;

for (var line in file) {
  total_lines++
  //console.log(line);  
}
//remove last element
total_lines = total_lines - 1;

//print total new lines in file to stdout
console.log(total_lines);
