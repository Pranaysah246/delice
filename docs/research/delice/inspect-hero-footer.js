const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

// Print Hero HTML details
const heroMatch = html.match(/<section class="c-hero[\s\S]*?<\/section>/i);
if (heroMatch) {
  console.log("=== HERO SECTION ===");
  console.log(heroMatch[0].slice(0, 1500));
}

// Print Footer HTML
const footerMatch = html.match(/<footer class="c-footer[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log("\n=== FOOTER SECTION ===");
  console.log(footerMatch[0].slice(0, 1500));
}

