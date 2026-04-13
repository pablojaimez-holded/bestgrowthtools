import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({}).passthrough(),
});

const top5 = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/top5' }),
  schema: z.object({}).passthrough(),
});

const vs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vs' }),
  schema: z.object({}).passthrough(),
});

export const collections = { reviews, top5, vs };
