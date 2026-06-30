# OpenCRM App

Generated app scaffold from OpenCRM Builder Class.

## Tech Stack

- **Frontend:** Vite + React + Tailwind CSS
- **Backend:** Bun + Elysia + Socket.io
- **Database:** PostgreSQL with `uuid-ossp` and `pgvector`
- **Cache/Queue:** Redis

## Prerequisites

- Node.js >= **22.12.0**
- Bun >= **1.3.0**
- PostgreSQL >= **14**
- Redis >= **6.0**
- Git, curl, bash

## Project Structure

```
.
├── apps/
│   ├── frontend/
│   │   └── apps/frontend/      # Real frontend source + Vite root
│   └── backend/
│       └── apps/backend/       # API + Socket.io service
├── frontend/
└── backend/
```

## Environment Variables

See `apps/backend/.env.example` and `apps/frontend/apps/frontend/.env.example`.

Required backend variables:

- `DATABASE_URL`
- `REDIS_URL`
- `JWT_SECRET`
- `WABA_*`
- `WA_TEMPLATE_*`

## Install & Run (VPS)

1. **Clone repo**
   - `git clone git@github.com:muhsaman933/opencrm-app.git`
   - `cd opencrm-app`

2. **Install dependencies**
   - Frontend: `cd apps/frontend/apps/frontend && npm install`
   - Backend: `cd apps/backend && npm install`

3. **Database**
   - Create DB: `createdb opencrm`
   - Enable extensions: `uuid-ossp`, `vector`
   - Run migrations inside `apps/backend`

4. **Redis**
   - Start redis and verify with `redis-cli ping`