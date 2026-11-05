import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const experimentsSchema = z.object({
  organization: z.string(),
  logo: z.string().optional(),
  kind: z.string().optional(),
  quote: z.string().optional(),
  url: z.string().optional()
})

export default defineContentConfig({
  collections: {
    pages_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/pages/**', prefix: '' }
    }),
    pages_en: defineCollection({
      type: 'page',
      source: { include: 'en/pages/**', prefix: '' }
    }),
    aide_fr: defineCollection({
      type: 'page',
      source: { include: 'fr/aide/**', prefix: '/aide' },
      schema: z.object({
        module: z.string(),
        moduleSlug: z.string(),
        order: z.number().default(0),
        actors: z.array(z.string()).default([]),
        enBref: z.string().default(''),
        where: z.string().default(''),
        status: z.enum(['draft', 'review', 'valid']).default('draft'),
        needs: z.array(z.string()).default([]),
        glossary: z.array(z.string()).default([]),
        video: z.string().default(''),
        videoStatus: z.enum(['none', 'script', 'todo', 'review', 'done']).default('none')
      })
    }),
    aide_en: defineCollection({
      type: 'page',
      source: { include: 'en/aide/**', prefix: '/aide' },
      schema: z.object({
        module: z.string(),
        moduleSlug: z.string(),
        order: z.number().default(0),
        actors: z.array(z.string()).default([]),
        enBref: z.string().default(''),
        where: z.string().default(''),
        status: z.enum(['draft', 'review', 'valid']).default('draft'),
        needs: z.array(z.string()).default([]),
        glossary: z.array(z.string()).default([]),
        video: z.string().default(''),
        videoStatus: z.enum(['none', 'script', 'todo', 'review', 'done']).default('none')
      })
    }),
    experiments_fr: defineCollection({
      type: 'data',
      source: 'fr/experiments/**.md',
      schema: experimentsSchema
    }),
    experiments_en: defineCollection({
      type: 'data',
      source: 'en/experiments/**.md',
      schema: experimentsSchema
    })
  }
})
