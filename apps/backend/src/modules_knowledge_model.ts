# Backend Source Reference - src/modules/knowledge/model.ts

Original source path: `apps/backend/src/modules/knowledge/model.ts`
Line count: 59
SHA-256: `e5c012cbe888cceb17e3a67078b21d504e439a2a220466497118bc19b5a26af7`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { t } from "elysia";

export const KnowledgeModel = {
  category: t.Object({
    id: t.String(),
    name: t.String(),
    description: t.Nullable(t.String()),
    source_count: t.Optional(t.Number()),
    faq_count: t.Optional(t.Number()),
  }),

  faq: t.Object({
    id: t.String(),
    question: t.String(),
    answer: t.String(),
    category_id: t.Nullable(t.String()),
    is_active: t.Boolean(),
  }),

  stats: t.Object({
    sources_count: t.Number(),
    faqs_count: t.Number(),
    categories_count: t.Number(),
  }),
} as const;

export const KnowledgeRequestModel = {
  createCategory: t.Object({
    name: t.String(),
    description: t.Optional(t.String()),
    parent_id: t.Optional(t.String()),
  }),

  createFAQ: t.Object({
    question: t.String(),
    answer: t.String(),
    category_id: t.Optional(t.String()),
    priority: t.Optional(t.Number()),
  }),

  updateCategory: t.Partial(
    t.Object({
      name: t.String(),
      description: t.Optional(t.String()),
      parent_id: t.Optional(t.String()),
    }),
  ),

  updateFAQ: t.Partial(
    t.Object({
      question: t.String(),
      answer: t.String(),
      category_id: t.Optional(t.String()),
      priority: t.Optional(t.Number()),
      is_active: t.Boolean(),
    }),
  ),
} as const;

````
