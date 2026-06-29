`md
# apps/frontend/

## Responsibility
Frontend SPA/SSR app for OpenCRM's WhatsApp-first CRM experience. It handles public auth screens, the authenticated workspace shell, admin pages, and all customer-facing CRM workflows.

## Design Patterns
- TanStack Router file-based routing with generated route tree
- Root document shell with theme provider and devtools gating
- Workspace layout route (`/_app`) with localStorage/cookie session bootstrapping and role-based navigation guards
- API client wrapper around fetch plus legacy credential fallbacks
- Socket.io client singleton for realtime inbox updates
- Tailwind + shared OpenCrm UI primitives for page composition

## Data & Control Flow
- `/` redirects to `/login` or `/dashboard` based on stored session token
- `login.tsx` authenticates, persists token/user, then syncs organization context before routing to onboarding/dashboard
- `/_app` resolves session + org context, loads agent data, enforces allowed workspace paths, and mounts sidebar/topbar shell
- Feature routes call `src/lib/api.ts` helpers for CRUD/data loading and `src/lib/socket.ts` for realtime events
- `useTimezone()` runs from the workspace shell to sync browser timezone with backend preferences

## Integration Points
- TanStack React Router, React 18, Vite, TanStack Start/SSR
- Backend API at `VITE_API_URL` (default `http://localhost:3010/api`)
- Socket server at `VITE_SOCKET_URL` (default `http://localhost:3011`)
- Cookies/localStorage keys: `scalechat_token`, `scalechat_user`, org/app context keys
- Shared UI state is mostly route-local React state; no dedicated global store was found in the inspected frontend core

