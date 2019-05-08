const puppeteer = require("puppeteer");

const getAllSVGs = async (startingPage, maxPageNumber, URL) => {
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
};

module.exports = getAllSVGs;
