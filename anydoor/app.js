const http = require('http')
const chalk = require('chalk')
const conf = require('./config/defaultConfig')
const path = require('path')
const route = require('./helper/route')

const server = http.createServer((req, res) => {
    const url = req.url
    const filePath = path.join(conf.root, url)
    route(req, res, filePath)

})

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`
    console.log(`server started at ${chalk.green(addr)}`);
})