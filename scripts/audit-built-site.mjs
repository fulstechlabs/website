import { access, readFile } from 'node:fs/promises';
import path from 'node:path';

const basePath = (process.env.BASE_PATH || '/').replace(/\/$/, '');
const indexPath = path.resolve('dist/index.html');
const html = await readFile(indexPath, 'utf8');

const requiredText = [
  'Focused software for clearer teamwork.',
  'https://docs.fulstech.com/',
  'https://marketplace.atlassian.com/vendors/1212817/fulstech',
  'https://fulstech.atlassian.net/servicedesk/customer/portals',
];

for (const value of requiredText) {
  if (!html.includes(value)) {
    throw new Error(`Missing required built content: ${value}`);
  }
}

for (const asset of ['favicon.svg', 'brand/fulstech-mark.svg', 'og.png']) {
  await access(path.resolve('dist', asset));
}

if (!html.includes(`${basePath}/brand/fulstech-mark.svg`)) {
  throw new Error(`Brand mark is not using expected base path: ${basePath}`);
}

console.log('Built website content, links, and assets are valid.');
