const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

function getTagContent(html, selector) {
  // Simple regex-based section extractor
  return html;
}

// Let us parse the main parts
const parts = {
  header: html.match(/<header[^>]*>([\s\S]*?)<\/header>/i)?.[0] || "",
  main: html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[0] || "",
  footer: html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i)?.[0] || ""
};

fs.writeFileSync(path.join(__dirname, "extracted-header.html"), parts.header);
fs.writeFileSync(path.join(__dirname, "extracted-main.html"), parts.main);
fs.writeFileSync(path.join(__dirname, "extracted-footer.html"), parts.footer);

console.log("Header length:", parts.header.length);
console.log("Main length:", parts.main.length);
console.log("Footer length:", parts.footer.length);
