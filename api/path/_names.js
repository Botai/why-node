const { basename, extname, dirname } = require('path')

const filePath = '/usr/local/bin/no.txt'

console.log(basename(filePath));
console.log(extname(filePath));
console.log(dirname(filePath));