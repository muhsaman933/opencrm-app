`md
# apps/frontend/src/lib/

## Responsibility
Frontend integration layer for backend APIs, session/org context, routing permissions, realtime sockets, notifications, and small client utilities.

## Design Patterns
- Fetch-based API wrappers with auth header injection and token-refresh retry
- Organization context persisted in both cookies and localStorage to decouple routes from URL segments
- Navigation and role-guard helpers centralize allowed workspace paths
- Socket.io singleton encapsulates connection setup and event subscriptions

## Data & Control Flow
- `api.ts` and `api-enhanced.ts` normalize auth headers (`scalechat_token`, org slug/app id, legacy app secret) and retry on 401 via refresh token
- `organization.ts` syncs `/auth/context`, persists org/app state, and provides onboarding/redirect helpers
- `opencrm-navigation.ts` defines the left-nav model and allowed paths used by sidebar + route guards
- `role-access.ts` narrows workspace access for agent/supervisor roles
- `socket.ts` connects with token/appId auth and exposes room/event helpers for chat updates
- `timezone.ts` + `hooks/useTimezone.ts` keep displayed time aligned with backend/user settings

## Integration Points
- Backend auth, organization, metrics, conversation, customer, media, labels, and timezone APIs
- Socket.io server on the realtime endpoint
- Routes and shell components consume these helpers for auth, redirects, permissions, and live updates

