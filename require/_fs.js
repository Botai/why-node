const fs = require('fs')

// 异步
const result = fs.readFile('./_fs.js', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString());  
    }
})

// undefined
console.log(result);