const fs = require("fs");

const writeSVGDataToFile = async allSVGData => {
  await new Promise(resolve => {
    fs.writeFileSync("./backup/svg.json", JSON.stringify(allSVGData));
    resolve();
  });
};

module.exports = writeSVGDataToFile;
