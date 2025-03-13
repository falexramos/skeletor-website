import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing:{
      prefixDefaultLocale: false,
    }
  },

  output: 'static',
  integrations: [tailwind(), react()],
});
