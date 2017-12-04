// http://www.w3school.com.cn/media/media_mimeref.asp
const path = require('path')

const mimeTypes = {
    'css': 'text/css',
    'gif': 'image/gif',
    'html': 'text/html',
    'json': 'application/json',
    'js': 'application/x-javascript'
}

module.exports = (filePath) => {
    let ext = path.extname(filePath)
        .split('.')
        .pop()
        .toLowerCase()

    if (!ext) {
        ext = filePath
    }

    return mimeTypes[ext] || mimeTypes['txt']
}