const fs = require("fs");
const path = require("path");

const mainHtml = fs.readFileSync(path.join(__dirname, "extracted-main.html"), "utf8");

// Look for top-level children of main or sections
const sectionRegex = /(<(?:section|div)[^>]+class=["'][^"']*(?:c-hero|o-section)[^"']*["'][\s\S]*?)(?=(?:<(?:section|div)[^>]+class=["'][^"']*(?:c-hero|o-section)[^"']*["'])|$)/gi;

const matches = [...mainHtml.matchAll(sectionRegex)];
console.log(`Found ${matches.length} sections in main:`);

matches.forEach((m, i) => {
  const content = m[1];
  const tagMatch = content.match(/<([a-z0-9]+)[^>]+class=["']([^"']+)["']/i);
  const headings = [...content.matchAll(/<(h[1-6])[^>]*>(.*?)<\/\1>/gis)].map(h => `${h[1]}: ${h[2].replace(/<[^>]+>/g, " ").trim()}`);
  console.log(`\n--- Section ${i + 1}: ${tagMatch ? tagMatch[2] : "unknown"} ---`);
  console.log(`Headings:`, headings.slice(0, 5));
  console.log(`Length: ${content.length} chars`);
  fs.writeFileSync(path.join(__dirname, `section-${i + 1}.html`), content);
});
