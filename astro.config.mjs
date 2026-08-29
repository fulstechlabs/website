import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://fulstechlabs.github.io';
const base = process.env.BASE_PATH || '/website';

export default defineConfig({
  site,
  base,
  output: 'static',
});

