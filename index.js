const puppeteer = require('puppeteer');
const { exec } = require("child_process");
const fs = require('fs')
const express = require('express')
const app = express()
const port = 4000
const name = `Link to PDF`

app.get('/', (req, res) => res.send(`${name} is alive!`))
app.get('/convert', async (req, res) => {
    const { link } = req.query
    if (!link) return res.status(400).send('Error no link provided')
    const isdone = await convert(link)
    console.log(isdone)
    res.contentType("application/pdf");
    const data = fs.readFileSync('link.pdf')
    res.send(data)
})
app.listen(port, () => console.log(`${name} is listening at http://localhost:${port}`))

const convert = async (link) => {
    return new Promise(async resolve => {

        const browser = await puppeteer.launch(
            { args: ['--no-sandbox', '--disable-setuid-sandbox'], headless: true });
        const page = await browser.newPage();
        await page.goto(link, { waitUntil: 'networkidle2' });
        await page.setViewport({
            width: 1400,
            height: 3200,
        });

        setTimeout(async () => {
            await page.screenshot({ path: 'link.png' });
            await browser.close();
            exec("convert link.png link.pdf", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                resolve('done')
            });
        }, 3000)

    })
};