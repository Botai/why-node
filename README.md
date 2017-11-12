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