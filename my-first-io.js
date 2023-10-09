const fs = require('fs');

const readFile = fs.readFileSync(process.argv[2])
const strlength = readFile.toString().split('\n').length - 1


console.log(strlength);