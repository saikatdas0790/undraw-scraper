const fs = require("fs");

const writeSVGDataToFile = async allSVGData => {
  await new Promise(() =>
    fs.writeFileSync("./backup/svg.json", JSON.stringify(allSVGData))
  );
};

module.exports = writeSVGDataToFile;
