import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute({
	path: '/_app/channels/line',
	loader: () => ({ ok: true }),
	component: () => <div>{'Channel: line'}</div>,
})
