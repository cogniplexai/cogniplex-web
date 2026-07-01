import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Casos de impacto — estructura antes/después. Rellenar con casos reales verificables. */
const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: z.object({
    title: z.string(),
    sector: z.string(),
    area: z.string(),
    summary: z.string(),
    before: z.string(),
    after: z.string(),
    /** Métrica destacada; usar [PLACEHOLDER] hasta validar con el cliente. */
    metric: z.string().optional(),
    metricLabel: z.string().optional(),
    order: z.number().default(99),
    placeholder: z.boolean().default(true),
  }),
});

/** Ideas — contenidos de negocio (no noticias de herramientas). */
const ideas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ideas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    pillar: z.string().default('Empresa aumentada'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { casos, ideas };
