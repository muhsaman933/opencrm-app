import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute({
	path: '/_app/channels/telegram',
	loader: () => ({ ok: true }),
	component: () => <div>{'Channel: telegram'}</div>,
})
