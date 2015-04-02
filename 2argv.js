
for (var i = 2, l = process.argv.length, total = 0; i < l; i++) {
  
  if (process.argv.length >= 3) {
  total = total + Number(process.argv.pop());
  //console.log('current total: ' + total);
  }
}

console.log(total);