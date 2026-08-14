import fs from "node:fs";
import path from "node:path";

const targetDir = path.resolve(process.cwd(), "dist/client");
const assetsDir = path.join(targetDir, "assets");

if (!fs.existsSync(targetDir)) {
  console.error("dist/client directory does not exist! Run vite build first.");
  process.exit(1);
}

// Find CSS and JS bundle files in dist/client/assets
const files = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];
const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css")) || files.find((f) => f.endsWith(".css"));
const indexJsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js")) || files.find((f) => f.endsWith(".js"));

console.log("Postbuild detected assets:", { cssFile, indexJsFile });

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Aman Gupta — Keynote Speaker & Business Growth Consultant</title>
    <meta name="description" content="Aman Gupta helps founders and organizations build stronger brands, better teams and sustainable growth through marketing, consumer psychology, leadership and AI." />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${indexJsFile ? `<script type="module" src="/assets/${indexJsFile}"></script>` : ""}
  </body>
</html>`;

// Write index.html and 404.html at root of targetDir
fs.writeFileSync(path.join(targetDir, "index.html"), htmlContent, "utf8");
fs.writeFileSync(path.join(targetDir, "404.html"), htmlContent, "utf8");

// Generate subfolder index.html for direct URL static routing on GitHub Pages
const routes = [
  "about",
  "speaking",
  "consulting",
  "corporate-training",
  "blog",
  "blog/how-to-use-antigravity",
  "blog/marketing-is-psychology",
  "blog/ai-adoption-without-chaos",
  "blog/growth-constraint",
  "blog/leaders-who-build-leaders",
  "blog/seo-in-the-answer-era",
  "blog/price-is-a-message",
  "resources",
  "contact",
];

for (const route of routes) {
  const routeDir = path.join(targetDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), htmlContent, "utf8");
}

console.log(`Successfully generated index.html, 404.html, and ${routes.length} static route files in dist/client!`);

// Ensure CNAME exists in targetDir
const cnameSrc = path.resolve(process.cwd(), "public/CNAME");
const cnameDest = path.join(targetDir, "CNAME");
if (fs.existsSync(cnameSrc)) {
  fs.copyFileSync(cnameSrc, cnameDest);
  console.log("Copied CNAME to dist/client/CNAME");
}
