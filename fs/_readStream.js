const fs = require('fs')

const rs = fs.createReadStream('./_readStream.js')

rs.pipe(process.stdout)