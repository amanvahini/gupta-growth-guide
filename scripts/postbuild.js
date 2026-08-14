import fs from "node:fs";
import path from "node:path";

const targetDir = path.resolve(process.cwd(), "dist");

if (!fs.existsSync(targetDir)) {
  console.error("dist directory does not exist! Run vite build first.");
  process.exit(1);
}

const indexPath = path.join(targetDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html does not exist!");
  process.exit(1);
}

const htmlContent = fs.readFileSync(indexPath, "utf8");

// Write 404.html fallback for SPA routing
fs.writeFileSync(path.join(targetDir, "404.html"), htmlContent, "utf8");

// Generate static route folders with index.html for direct URL static routing on GitHub Pages
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

console.log(`Successfully generated 404.html and ${routes.length} static route files in dist/!`);

// Copy CNAME file to dist/CNAME
const cnameSrc = path.resolve(process.cwd(), "public/CNAME");
const cnameDest = path.join(targetDir, "CNAME");
if (fs.existsSync(cnameSrc)) {
  fs.copyFileSync(cnameSrc, cnameDest);
  console.log("Copied CNAME to dist/CNAME");
}

// Create .nojekyll in dist
fs.writeFileSync(path.join(targetDir, ".nojekyll"), "", "utf8");
console.log("Created dist/.nojekyll to disable Jekyll processing on GitHub Pages");
