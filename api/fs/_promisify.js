const fs = require('fs')
const promisify = require('util').promisify

const read = promisify(fs.readFile)

// read('./_promisify.js')
//     .then(data => {
//         console.log(data.toString());
//     })
//     .catch(err => {
//         console.log(err);
//     })

async function test() {
    try {
        const content = await read('./_promisify.js')
        console.log(content.toString());
    } catch (error) {
        console.log(error);
    }
}

test()