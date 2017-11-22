# why-node

### [require 特性](./require)

* module 被加载的时候执行， 加载后缓存
* 一旦出现某个模块循环加载，就只输出已经执行的部分，还未执行的部分不会输出
* 尽量避免...

### [exports 与 module.exports](./exports)

* 查看代码...

### [global](./global)

* CommonJS
* Buffer, process, console
* timer

### [node 的 debug](./debug)
* [Inspector](https://nodejs.org/en/docs/inspector/)
* VS Code
    * 配置如下
        ```javascript
        {
            // Use IntelliSense to learn about possible attributes.
            // Hover to view descriptions of existing attributes.
            // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
            "version": "0.2.0",
            "configurations": [
                {
                    "type": "node",
                    "request": "launch",
                    "name": "current file",
                    "program": "${file}",
                    "cwd": "${cwd}"
                },
                {
                    "type": "node",
                    "request": "launch",
                    "name": "Launch Program",
                    "program": "${file}"
                }
            ]
        }
        ```
* Chrome 中调试
    * 在运行时便停止
        ```bash
        node --inspect-brk _debug.js
        ```

### [path](./path)
* normalize 把路径改为标准格式
* join 无论是否加斜线，拼接成标准路径
* resolve 相对路径解析为绝对路径
* basename 文件名
* dirname 所在文件夹名字
* extname 文件拓展名
* parse 分析一个路径,得到路径的对象
* format 与 parse 相反，得到字符串
* 小结:
    * __dirname, __filename 总是返回文件的绝对路径
    * process.cwd() 总是返回执行 node 命令所在的文件夹
    * ./  在 require 方法中总是相对当前文件所在的文件夹, 在其他地方和 process.cwd() 一样，相对 node 启动文件夹