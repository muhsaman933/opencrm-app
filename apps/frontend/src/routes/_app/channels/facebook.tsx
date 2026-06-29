import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute({
	path: '/_app/channels/facebook',
	loader: () => ({ ok: true }),
	component: () => <div>{'Channel: facebook'}</div>,
})
