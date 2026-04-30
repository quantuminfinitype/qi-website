// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://quantuminfinitype.github.io',
  base: '/qi-website',
  vite: {
    plugins: [tailwindcss()]
  }
});