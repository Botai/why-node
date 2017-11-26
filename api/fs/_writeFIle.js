const fs = require('fs')

fs.writeFile('./text', 'This is a test', {
    encoding: 'utf8'
}, err => {
    if (err) throw err;

    console.log('done');
})

const content = Buffer.from('this is a test1 !')

fs.writeFile('./text1', content, err => {
    if (err) throw err;

    console.log('done 1');
})