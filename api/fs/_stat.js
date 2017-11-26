const fs = require('fs')

fs.stat('./_stat.js', (err, stats) => {
    if (err) {
        console.log('文件不存在');
    }

    console.log(stats.isFile());
    console.log(stats.isDirectory());

    console.log(stats);
})