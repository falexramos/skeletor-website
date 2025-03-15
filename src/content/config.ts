import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  })
});

export const collections = {
  'projects': projectsCollection,
};