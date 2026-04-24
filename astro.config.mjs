import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.skymakers.digital',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
