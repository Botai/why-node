const fs = require('fs')

fs.watch('./', {
    // 是否递归
    recursive: true
}, (eventType, filename) => {
    console.log(eventType, filename);
})