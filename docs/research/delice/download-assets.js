const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const researchDir = path.join(__dirname);
const publicDir = path.resolve(__dirname, "../../../public/sites/delice/assets");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const html = fs.readFileSync(path.join(researchDir, "index.html"), "utf8");
const css = fs.readFileSync(path.join(researchDir, "mainCss.css"), "utf8");

const urls = new Set();
for (const m of html.matchAll(/(?:src|href|data-src|poster)=["']([^"']+\.(?:png|jpe?g|svg|webp|avif|ico|gif)[^"']*)["']/gi)) {
  urls.add(m[1].split("?")[0]);
}
for (const m of (html + css).matchAll(/url\(([^)]+\.(?:png|jpe?g|svg|webp|avif|ico|gif)[^)]*)\)/gi)) {
  urls.add(m[1].replace(/['"]/g, "").trim().split("?")[0]);
}

const urlList = Array.from(urls);

function downloadFile(fullUrl, targetPath) {
  return new Promise((resolve, reject) => {
    const proto = fullUrl.startsWith("https") ? https : http;
    const req = proto.get(fullUrl, { headers: { "User-Agent": "Mozilla/5.0" } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith("http")) {
          redirectUrl = new URL(redirectUrl, fullUrl).href;
        }
        return downloadFile(redirectUrl, targetPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${fullUrl}`));
      }
      const fileStream = fs.createWriteStream(targetPath);
      res.pipe(fileStream);
      fileStream.on("finish", () => {
        fileStream.close(() => resolve());
      });
    });
    req.on("error", reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout for ${fullUrl}`));
    });
  });
}

async function run() {
  const assetMap = {};
  for (const rawUrl of urlList) {
    let fullUrl = rawUrl;
    if (fullUrl.startsWith("//")) {
      fullUrl = "https:" + fullUrl;
    } else if (fullUrl.startsWith("/")) {
      fullUrl = "https://delice.ca" + fullUrl;
    } else if (!fullUrl.startsWith("http")) {
      fullUrl = "https://delice.ca/" + fullUrl;
    }

    const filename = path.basename(new URL(fullUrl).pathname);
    const localFile = path.join(publicDir, filename);
    const localPublicPath = `/sites/delice/assets/${filename}`;

    try {
      console.log(`Downloading: ${fullUrl} -> ${filename}`);
      await downloadFile(fullUrl, localFile);
      assetMap[rawUrl] = localPublicPath;
      assetMap[fullUrl] = localPublicPath;
    } catch (err) {
      console.error(`Failed downloading ${fullUrl}:`, err.message);
    }
  }

  fs.writeFileSync(path.join(researchDir, "asset-map.json"), JSON.stringify(assetMap, null, 2));
  console.log(`Done! Downloaded ${Object.keys(assetMap).length / 2} assets.`);
}

run();
