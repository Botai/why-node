const fs = require('fs')

// 异步
fs.readFile('./_readFile.js', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
})

console.log('--------------------');

// 同步
const data1 = fs.readFileSync('./_readFile.js', 'utf8')

console.log(data1);