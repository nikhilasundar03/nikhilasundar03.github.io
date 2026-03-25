import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nikhilasundar03.github.io',
  base: '/',
  output: 'static',
  integrations: [react(), tailwind(), sitemap()],
});