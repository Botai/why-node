module.exports.test = 'B'

const modA = require('./_modA')

console.log(`modB: ${modA.test}`);

module.exports.test = 'BB'