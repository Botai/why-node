const puppeteer = require('puppeteer');

const arguments = process.argv.splice(2);
const str_arguments = JSON.stringify(arguments).replace(/\[|]|"/g, '')
console.log(str_arguments);

;
(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://reader.library.neusoft.edu.cn/book/queryIn.jsp')
    console.log('http://reader.library.neusoft.edu.cn/book/queryIn.jsp');
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    console.log('reset viewport');


    await page.focus('.input_text');
    const str = str_arguments;
    await page.keyboard.type(str)
    await page.keyboard.press('Enter')
    console.log('go to search list');

    page.on('load', async() => {
        console.log('page loading done, start fetch...');

        const names = await page.evaluate(() => {
            const texts = document.querySelectorAll('a.opac_blue')
            return Array.prototype.map.call(texts, data => data.text)
        });

        console.log('success!!');
        console.log("---------------------");
        names.forEach(async(text) => {
            if (text !== ' 查看索书号' && text !== '全选' && text !== '取消') {
                console.log(text);
            }
        })
        console.log("---------------------");

        await browser.close();
    });
})();