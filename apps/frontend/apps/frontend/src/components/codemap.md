`md
# apps/frontend/src/components/

## Responsibility
Reusable workspace UI, feature panels, modals, sidebars, and domain widgets used by route screens.

## Design Patterns
- Composition-first React components with Tailwind utility classes
- Feature folders for settings, billing, admin, developers, flows, and opencrm shared primitives
- Reusable shell pieces (`Sidebar`, `TopBar`, `BottomNav`, `CommandPalette`) drive the workspace chrome
- Many components are thin wrappers around backend-driven forms/modals rather than centralized state containers

## Data & Control Flow
- Route components pass fetched data and callbacks into presentational/interactive subcomponents
- Components often read session/agent context from localStorage or route context when no prop is supplied
- Settings and workflow components manage their own form state and call API helpers directly
- Realtime inbox and chat-related widgets subscribe to socket events through route-owned lifecycle hooks

## Integration Points
- Depends on `src/lib/api.ts`, `src/lib/socket.ts`, `src/lib/opencrm-navigation.ts`, and `src/routes/_app.tsx`
- Uses shared UI primitives in `src/components/ui/*` and shared OpenCRM primitives in `src/components/opencrm/shared.tsx`

