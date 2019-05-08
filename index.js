const getAllSVGs = require("./src/getAllSVGs");
const writeSVGDataToFile = require("./src/writeSVGDataToFile");
const downloadAll = require("./src/downloadAll");

const maxPageNumber = 34;
const startingPage = 1;
const URL = `https://undraw.co/illustrations/load/`;

(async () => {
  const allSVGs = await getAllSVGs(startingPage, maxPageNumber, URL);

  await writeSVGDataToFile(allSVGs);
  await downloadAll(allSVGs);
})();
