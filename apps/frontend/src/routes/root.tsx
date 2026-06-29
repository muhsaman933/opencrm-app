# Frontend Source Reference - src/routes/__root.tsx

Original source path: `apps/frontend/src/routes/__root.tsx`
Line count: 151
SHA-256: `4cf6b267cfeddd1f5404d25d35ef789151dcb613fd4e811179a6750199266749`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { TanStackDevtools } from '@tanstack/react-devtools'
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

import '../styles.css'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'OpenCRM - WhatsApp CRM Platform',
			},
			{
				name: 'description',
				content: 'OpenCRM - WhatsApp-first customer engagement platform',
			},
			{
				property: 'og:type',
				content: 'website',
			},
			{
				property: 'og:url',
				content: 'https://app.opencrm.chat/',
			},
			{
				property: 'og:title',
				content: 'OpenCRM - WhatsApp CRM Platform',
			},
			{
				property: 'og:description',
				content: 'WhatsApp-first customer engagement platform',
			},
		],
		links: [],
	}),
	component: RootComponent,
	shellComponent: RootDocument,
})

function RootComponent() {
	return <Outlet />
}

function RootDocument({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false)
	const shouldShowTanStackDevtools =
		mounted &&
		import.meta.env.DEV &&
		import.meta.env.VITE_SHOW_TANSTACK_DEVTOOLS === 'true'

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		if (!import.meta.env.DEV || typeof window === 'undefined') return

		const shouldRecoverFromModuleLoadError = (message: string) => {
			return (
				message.includes('Failed to fetch dynamically imported module') ||
				message.includes('Importing a module script failed') ||
				message.includes('Outdated Optimize Dep')
			)
		}

		const tryRecoverByReloading = () => {
			const reloadGuardKey = `opencrm:vite-reload-recovery:${window.location.pathname}`
			if (sessionStorage.getItem(reloadGuardKey) === '1') return
			sessionStorage.setItem(reloadGuardKey, '1')
			window.location.reload()
		}

		const handleWindowError = (event: ErrorEvent) => {
			const message = String(event.message || '')
			if (!shouldRecoverFromModuleLoadError(message)) return
			event.preventDefault()
			tryRecoverByReloading()
		}

		const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
			const reason = event.reason
			const message =
				typeof reason === 'string'
					? reason
					: reason instanceof Error
						? reason.message
						: String(reason ?? '')

			if (!shouldRecoverFromModuleLoadError(message)) return
			event.preventDefault()
			tryRecoverByReloading()
		}

		window.addEventListener('error', handleWindowError)
		window.addEventListener('unhandledrejection', handleUnhandledRejection)

		return () => {
			window.removeEventListener('error', handleWindowError)
			window.removeEventListener('unhandledrejection', handleUnhandledRejection)
		}
	}, [])

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="min-h-screen bg-background text-foreground antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
					storageKey="opencrm-theme"
				>
					{children}
					<Toaster closeButton position="top-right" richColors />
					{shouldShowTanStackDevtools && (
						<TanStackDevtools
							config={{
								position: 'bottom-right',
							}}
							plugins={[
								{
									name: 'Tanstack Router',
									render: <TanStackRouterDevtoolsPanel />,
								},
							]}
						/>
					)}
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	)
}

````
