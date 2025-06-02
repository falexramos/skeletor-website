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
  integrations: [tailwind(), react(),
    icon(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE_SETTING,
        locales: Object.fromEntries(
          Object.entries(LOCALES_SETTING).map(
            ([key, value]) => [key, value.lang ?? key]
          )
        ),
      },
    })
  ],
});
