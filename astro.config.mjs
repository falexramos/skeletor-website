//astro.config.mjs
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

  // Configuración de Content Collections
  content: {
    collections: {
      projects: {
        schema: ({ z }) => ({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          image: z.string(),
          date: z.date().optional(),
          featured: z.boolean().default(false),
          draft: z.boolean().default(false),
        })
      }
    }
  },

  output: 'static',
  integrations: [tailwind(), react()],
});
