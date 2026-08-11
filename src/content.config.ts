import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const optionalDate = z.preprocess(
  (value) => value === '' || value === null ? undefined : value,
  z.coerce.date().optional()
);

const entries = defineCollection({
  loader: glob({
    base: './src/content/entries',
    pattern: '**/*.md'
  }),
  schema: z.object({
    title: z.string(),
    module: z.enum(['academic', 'research', 'projects', 'reading', 'about']),
    date: z.coerce.date(),
    updated: optionalDate,
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false)
  })
});

export const collections = { entries };
