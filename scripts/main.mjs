import fs from 'fs';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto('https://tenthin.github.io/firstsem-react-project/');
await page.setViewport({ width: 1080, height: 3000 });
await page.waitForNetworkIdle();
await page.screenshot({
    path: "auto_screenshot.png"
})

const options = { output: 'html' };
const runnerResult = await lighthouse('https://tenthin.github.io/firstsem-react-project/', options, undefined, page);
const reportHtml = runnerResult.report;
fs.writeFileSync('auto_report.html', reportHtml);

await browser.close();