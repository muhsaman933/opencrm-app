`md
# apps/frontend/src/routes/

## Responsibility
Route-layer pages and layouts for public auth, onboarding, the authenticated CRM workspace, invoice rendering, and super-admin views.

## Design Patterns
- File-based routes with `createFileRoute`, `beforeLoad`, `validateSearch`, and nested outlets
- Root route defines HTML shell, metadata, theme provider, and dev-only router/devtools panel
- Workspace route `/_app` centralizes auth/session checks, org-context recovery, path authorization, and responsive sidebar handling
- Individual screens are mostly route components backed by React local state and API calls

## Data & Control Flow
- Public routes (`/login`, `/register`, `/onboarding`, `/terms`, `/privacy`) are reachable without the workspace shell
- `index.tsx` always redirects to the correct auth or app landing page
- `admin.tsx` gatekeeps by `scalechat_user.role === 'super_admin'`
- Workspace pages fetch domain data from `src/lib/api.ts` and use route params/search validation for screen state
- `/_app/settings` and other feature screens persist small UI choices in query params or localStorage

## Integration Points
- `src/router.tsx` creates the TanStack router instance from `routeTree.gen`
- `src/components/Sidebar.tsx`, `TopBar.tsx`, and `BottomNav.tsx` compose the authenticated shell
- Route screens integrate with `src/lib/organization.ts`, `src/lib/role-access.ts`, `src/lib/socket.ts`, and `src/lib/api.ts`

