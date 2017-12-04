const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')
const promisify = require('util').promisify
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)
const config = require('../config/defaultConfig')
const mime = require('../helper/mime')
const compress = require('./compress')


const tplpath = path.join(__dirname, '../template/dir.tpl')
    // 只执行一次
const source = fs.readFileSync(tplpath)
const template = Handlebars.compile(source.toString())

module.exports = async function(req, res, filePath) {
    try {
        const stats = await stat(filePath)

        if (stats.isFile()) {
            const contentType = mime(filePath)
            res.statusCode = 200;
            res.setHeader('content-Type', contentType)
                // 流的方式读写快
            let rs = fs.createReadStream(filePath)
            if (filePath.match(config.compress)) {
                console.log('压缩');
                rs = compress(rs, req, res)
            }
            rs.pipe(res)
        } else if (stats.isDirectory()) {
            const files = await readdir(filePath)
            res.statusCode = 200;
            res.setHeader('content-Type', 'text/html')
            const dir = path.relative(config.root, filePath)
            const data = {
                title: path.basename(filePath),
                // 相对于 root 的路径
                dir: dir ? `/${dir}` : '',
                files: files.map(file => {
                    return {
                        file,
                        icon: mime(file)
                    }
                })
            }
            res.end(template(data))
        }
    } catch (error) {
        console.error(error);
        res.statusCode = 404;
        res.setHeader('content-Type', 'text/plain')
        res.end(`${filePath} is not a directory or file\n ${error}`)
    }
}