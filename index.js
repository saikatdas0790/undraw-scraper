const puppeteer = require("puppeteer");

const maxPageNumber = 34;
const startingPage = 1;
const URL = `https://undraw.co/illustrations/load/`;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  let allSVGs = [];

  for (let index = startingPage; index <= maxPageNumber; index++) {
    const urlToVisit = `${URL}${index}`;
    await page.goto(urlToVisit);
    const svgObjects = await page.$$eval(".item:not(.item--ghost)>a", items =>
      items.map(item => ({
        title: item.dataset.title,
        imageURL: item.dataset.src
      }))
    );

    allSVGs = [...allSVGs, ...svgObjects];
  }
})();
