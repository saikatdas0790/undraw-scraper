const download = require("download");

const downloadAll = async svgArray =>
  svgArray.map(async svg => {
    await download(svg.imageURL, "./svg/", {
      filename: `${svg.title}.svg`
    });
  });

module.exports = downloadAll;
