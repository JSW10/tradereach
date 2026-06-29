/**
 * screenshot.mjs - Takes a screenshot of a URL using Puppeteer
 * Usage: node screenshot.mjs <url> [label]
 * Saves to ./temporary screenshots/screenshot-N.png (auto-incremented)
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, 'temporary screenshots');

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

// Find next screenshot number
const existing = fs.readdirSync(screenshotDir)
  .filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
  .map(f => parseInt(f.replace('screenshot-', '').replace('.png', ''), 10))
  .filter(n => !isNaN(n));
const next = existing.length > 0 ? Math.max(...existing) + 1 : 1;
const filename = `screenshot-${next}${label ? '-' + label : ''}.png`;
const outPath = path.join(screenshotDir, filename);

console.log(`Screenshotting ${url} -> ${filename}`);

// Use puppeteer via npx
const script = `
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('${url}', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.screenshot({ path: '${outPath}', fullPage: false });
  await browser.close();
  console.log('Saved to ${outPath}');
})().catch(e => { console.error(e); process.exit(1); });
`;

const tmpScript = path.join('/tmp', 'screenshot-run.js');
fs.writeFileSync(tmpScript, script);

try {
  execSync(`npx --yes puppeteer@21 node '${tmpScript}'`, { stdio: 'inherit', timeout: 60000 });
} catch (e) {
  // fallback: try playwright
  try {
    execSync(`npx --yes playwright@latest screenshot '${url}' '${outPath}' --viewport-size '1440,900' --wait-for-timeout 2000`, { stdio: 'inherit', timeout: 60000 });
  } catch (e2) {
    console.error('Screenshot failed. Install puppeteer or playwright.');
    process.exit(1);
  }
}
