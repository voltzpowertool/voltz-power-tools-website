// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://voltzpowertools.com',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@/components': '/src/components',
        '@/layouts': '/src/layouts',
        '@/data': '/src/data',
        '@/styles': '/src/styles',
      },
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
  },
});
