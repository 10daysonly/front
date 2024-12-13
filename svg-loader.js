const path = require("path");
const fs = require("fs");

module.exports = function svgMetaLoader(content) {
  const callback = this.async();
  const filePath = this.resourcePath;
  const publicPath = "/_next/static/media/";
  const outputFilename = `static/media/${path.basename(filePath)}`;

  // width와 height 속성 추출
  const svgContent = content.toString();
  const widthMatch = svgContent.match(/width="([\d.]+)"/);
  const heightMatch = svgContent.match(/height="([\d.]+)"/);

  if (widthMatch && heightMatch) {
    const width = parseFloat(widthMatch[1]);
    const height = parseFloat(heightMatch[1]);

    // 정적 파일로 복사
    this.emitFile(outputFilename, svgContent);

    // JS 모듈로 내보내기
    const output = `
      module.exports = {
        src: '${publicPath}${path.basename(filePath)}',
        width: ${width},
        height: ${height}
      };
    `;
    callback(null, output);
  } else {
    callback(new Error("SVG width or height not found."));
  }
};
