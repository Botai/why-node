console.log('this is module');

const testVar = 100

function test() {
    console.log(testVar)
}

module.exports.testVar = testVar
module.exports.testFn = testVar