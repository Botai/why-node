# why-node

> 一切内容基于[官网api](http://nodejs.cn/api/)

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
    * 配置如下(看个人喜好)
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

### [buffer](./buffer)

* Buffer 用于处理二进制数据流，实例类似整数数组，大小固定，由 c++ 大代码在 v8 堆外分配物理内存
* 例子：
    ``` javascript
    // 创建一个长度为 10、且用 0 填充的 Buffer。
    const buf1 = Buffer.alloc(10);

    // 创建一个长度为 10、且用 0x1 填充的 Buffer。 
    const buf2 = Buffer.alloc(10, 1);

    // 创建一个长度为 10、且未初始化的 Buffer。
    // 这个方法比调用 Buffer.alloc() 更快，
    // 但返回的 Buffer 实例可能包含旧数据，
    // 因此需要使用 fill() 或 write() 重写。
    const buf3 = Buffer.allocUnsafe(10);

    // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
    const buf4 = Buffer.from([1, 2, 3]);

    // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
    const buf5 = Buffer.from('tést');

    // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
    const buf6 = Buffer.from('tést', 'latin1');
    ```

* Buffer类 静态属性方法，常用的如下：
    * Buffer.byteLength()
    * Buffer.isBuffer()
    * Buffer.concat()

* Buffer实例 方法，常用的如下：
    * buf.length()
    * buf.toString()
    * buf.fill()
    * buf.equals()
    * buf.indexOf()
    * buf.copy()

### [events](./events)
* [传送门](http://nodejs.cn/api/events.html)

### [fs](./fs) 
* [传送门](http://nodejs.cn/api/fs.html)
* 回调函数的第一个参数都会保留给异常
* promise & async await
