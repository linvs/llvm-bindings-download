const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    args: [`--window-size=${1920},${1080}`]
  });
  for (let i = 0; i < 100; ++i) {
		console.log(`进度: ${i} / 100`)
		let page = null
		try {
			page = await browser.newPage();
			await page.goto("https://dev.to/apsarasx/use-llvm-by-javascripttypescript-27c3", {
				waitUntil: "domcontentloaded",
			});
			await page.waitForTimeout(1000);
			await autoScroll(page)
			await page.waitForTimeout(1000);
			await page.close();
		} catch {
			console.log('页面发生错误')
			if (page) {
				await page.close();
			}
		}
		console.log()
  }
	await browser.close();
})();

async function autoScroll(page){
	await page.evaluate(async () => {
			await new Promise((resolve, reject) => {
					let totalHeight = 0;
					let distance = 100;
					let timer = setInterval(() => {
							window.scrollBy(0, distance);
							totalHeight += distance;

							if(totalHeight >= 5000){
									clearInterval(timer);
									resolve();
							}
					}, 100);
			});
	});
}