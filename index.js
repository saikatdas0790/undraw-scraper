const getAllSVGs = require("./src/getAllSVGs");
const writeSVGDataToFile = require("./src/writeSVGDataToFile");

const maxPageNumber = 34;
const startingPage = 1;
const URL = `https://undraw.co/illustrations/load/`;

(async () => {
  const dummySVGObj = [
    {
      title: "Portfolio Update",
      imageURL: `https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/portfolio_update_nqhs.svg`
    }
  ];
  // const allSVGs = await getAllSVGs(startingPage, maxPageNumber, URL);

  await writeSVGDataToFile(dummySVGObj);
})();
