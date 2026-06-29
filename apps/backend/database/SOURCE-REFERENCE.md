# Source Reference — Database Folder

Scope:

```text
database/schema.sql
apps/backend/prisma/schema.prisma
apps/backend/prisma/seed.ts
backend/reference/BACKEND-SOURCE-MANIFEST.json
```

## Database Strategy
Use `database/schema.sql` as the importable SQL snapshot. The exact Prisma source reference is `backend/reference/files/033__prisma_schema.prisma.md`; regenerate both from the current `opencrm-app` snapshot with `node scripts/generate-exact-references.mjs`.

Current parity snapshot:

```text
Prisma models: 113
SQL CREATE TABLE statements: 113
Migration folders: 23
Latest migration: 20260506173000_add_baileys_sessions
BYOK default: ai_settings.use_platform_credentials DEFAULT false
```

Required extensions:

```sql
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Auth Tables
Better Auth depends on these tables and field mappings:

```text
users
session
account
verification
organization
member
invitation
```

Important mappings:

```text
users.avatar_url    -> Better Auth image field
users.created_at    -> Better Auth createdAt field
users.updated_at    -> Better Auth updatedAt field
session.token       -> Bearer token lookup
session.userId      -> user relation
session.activeOrganizationId
organization.appId  -> internal apps link
member.userId       -> organization membership
```

## Tenant Link
OpenCRM tenant resolution expects:

```text
users.app_id
users.organization_slug
users.organization_name
organization.appId
apps.id
apps.app_id
```

Do not remove legacy app fields; frontend and appContext still use `X-App-Id` compatibility.

## WhatsApp Baileys
Non-official WhatsApp provider support depends on:

```text
baileys_sessions
whatsapp_channels.provider = baileys
whatsapp_channels.provider_channel_key
BAILEYS_PROVIDER_WEBHOOK_URL
BAILEYS_PROVIDER_WEBHOOK_PATH
BAILEYS_SERVICE_URL
BAILEYS_SERVICE_INTERNAL_TOKEN
```

## Seed Strategy
Seed core must not create production passwords. Account creation should happen through Better Auth register/onboarding flow, except explicit non-production fixtures.

Seed priority:

```text
AI model pricing
optional electronics catalog
optional treatment catalog
product knowledge export
```

## Design Token
Database stores data, not design tokens. Store semantic values only unless schema requires exact color fields.

## Design System
Frontend design system maps DB values to UI through API services; avoid DB-driven Tailwind class names.
