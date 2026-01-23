import { glob } from 'astro/loaders'; // glob loader
import { defineCollection } from 'astro:content'; // utilities
import { z } from 'astro/zod'; // zod -> schema deckaration and validation

// definicion de colección
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/blog' }),
  // definicion de schema/modelo
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});

export const collections = { blog };
