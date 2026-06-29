# Frontend Source Reference - src/routes/_app/channels/telegram.tsx

Original source path: `apps/frontend/src/routes/_app/channels/telegram.tsx`
Line count: 10
SHA-256: `47b5f1b8dc82d58699546fa5622fdc0943f87fcdb288ff3725162389a3462c80`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/channels/telegram')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/channels/telegram"!</div>
}

````
