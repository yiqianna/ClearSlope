/**
 * After `vite build`, this script reads the built JS + CSS,
 * creates a single self-contained HTML string, and writes it to
 * portfolio/demo-inline.js as window.__DEMO_SRCDOC__.
 *
 * The portfolio iframe then sets srcdoc from that variable —
 * no HTTP server required, works on file:// protocol.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = path.join(root, 'portfolio/app/assets');

if (!fs.existsSync(assetsDir)) {
  console.error('❌  portfolio/app/assets not found — run `npm run build` first.');
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const jsFile  = files.find(f => f.endsWith('.js')  && !f.includes('.map'));
const cssFile = files.find(f => f.endsWith('.css') && !f.includes('.map'));

if (!jsFile || !cssFile) {
  console.error('❌  Could not find built JS/CSS in portfolio/app/assets.');
  process.exit(1);
}

const js  = fs.readFileSync(path.join(assetsDir, jsFile),  'utf8');
const css = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');

const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>${css}</style></head><body><div id="root"></div><script type="module">${js}</script></body></html>`;

const out = `window.__DEMO_SRCDOC__=${JSON.stringify(html)};`;
fs.writeFileSync(path.join(root, 'portfolio/demo-inline.js'), out);

const kb = Math.round(out.length / 1024);
console.log(`✓  portfolio/demo-inline.js generated (${kb} KB) — open portfolio/index.html directly.`);
