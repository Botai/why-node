const path = require('path')
const mod = require('./../require/cusmod')

console.log(mod.testVar);

console.log(`__dirname => ${__dirname}`);
console.log(`process.cwd() => ${process.cwd()}`);
console.log(`./ => ${path.resolve('./')}`);