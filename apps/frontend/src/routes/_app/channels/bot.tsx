import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute({
	path: '/_app/channels/bot',
	loader: () => ({ ok: true }),
	component: () => <div>{'Channel: bot'}</div>,
})
