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
            return Array.prototype.map.call(texts, data => {
                return text = {
                    name: data.text,
                    href: data.href
                };

            })
        });

        console.log('success!!');
        console.log("---------------------");
        names.forEach(async(text) => {
            if (text.name !== ' 查看索书号' && text.name !== '全选' && text.name !== '取消') {
                console.log(text.name);
                var changeHref = text.href;
                changeHref = changeHref.slice('32').replace(/\'|,|\(|\)/g, "");
                changeHref = 'http://reader.library.neusoft.edu.cn/book/detailBook.jsp?rec_ctrl_id=' + changeHref
                console.log(changeHref);

            }
        })
        console.log("---------------------");

        await browser.close();
    });
})();