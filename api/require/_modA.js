module.exports.test = 'A'

const modB = require('./_modB')

console.log(`modA: ${modB.test}`);

module.exports.test = 'AA'