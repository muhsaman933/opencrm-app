# Frontend Source Reference - src/routes/index.tsx

Original source path: `apps/frontend/src/routes/index.tsx`
Line count: 15
SHA-256: `3d92c509f7ef0c304059eda602e38c4d28c49618e28ae3d8985bc5d83ad25562`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	beforeLoad: () => {
		// Check if user is already logged in
		if (typeof localStorage !== 'undefined') {
			const token = localStorage.getItem('scalechat_token')
			if (token) {
				throw redirect({ to: '/dashboard', replace: true })
			}
		}
		throw redirect({ to: '/login', replace: true })
	},
})

````
