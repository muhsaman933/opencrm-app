import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute({
	path: '/_app/channels/custom',
	loader: () => ({ ok: true }),
	component: () => <div>{'Channel: custom'}</div>,
})
