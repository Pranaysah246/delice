const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

// Headings
const headings = [...html.matchAll(/<(h[1-6])[^>]*>(.*?)<\/\1>/gis)].map(m => ({
  tag: m[1],
  text: m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
}));
console.log("=== HEADINGS ===");
headings.forEach(h => console.log(`${h.tag.toUpperCase()}: ${h.text}`));

// Images
const images = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => {
  const full = m[0];
  const src = m[1];
  const alt = (full.match(/alt=["']([^"']*)["']/) || [])[1] || "";
  const className = (full.match(/class=["']([^"']*)["']/) || [])[1] || "";
  return { src, alt, className };
});
console.log(`\n=== IMAGES (${images.length}) ===`);
images.forEach(img => console.log(`[${img.alt}] -> ${img.src}`));

// Background images in style or inline style
const bgImages = [...html.matchAll(/url\(([^)]+)\)/gi)].map(m => m[1].replace(/['"]/g, "").trim());
console.log("\n=== BACKGROUND IMAGES ===");
[...new Set(bgImages)].filter(u => u.includes("wp-content")).forEach(u => console.log(u));

// Stylesheets
const cssFiles = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
console.log("\n=== CSS FILES ===");
cssFiles.forEach(f => console.log(f));

// Check for videos
const videos = [...html.matchAll(/<video[^>]*>.*?<\/video>/gis)];
console.log("\n=== VIDEOS ===");
console.log("Video count:", videos.length);
videos.forEach(v => console.log(v[0].slice(0, 300)));
