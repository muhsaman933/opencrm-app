# Frontend Source Reference - src/router.tsx

Original source path: `apps/frontend/src/router.tsx`
Line count: 16
SHA-256: `b479b0f36dcc11466c5c6d9c92e57adb4b0bca45c1bce323511f43e09a14c286`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
	})

	return router
}

````
