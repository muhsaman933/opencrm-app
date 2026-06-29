# Backend Source Reference - src/lib/seed.ts

Original source path: `apps/backend/src/lib/seed.ts`
Line count: 27
SHA-256: `cc705aba64f5a50894fe2761b48dfe6fb51d1c5969f775d6178213a15acc2ba2`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
import { prisma } from './prisma';

async function seed() {
  console.log('Seeding database...');

  // Seed default credit cost
  await prisma.platform_settings.upsert({
    where: { key: 'ai_default_credit_cost' },
    update: {},
    create: {
      key: 'ai_default_credit_cost',
      value: '0.30',
    },
  });

  console.log('Seeding completed.');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

````
