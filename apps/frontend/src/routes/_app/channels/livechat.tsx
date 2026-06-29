import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute({
	path: '/_app/channels/livechat',
	loader: () => ({ ok: true }),
	component: () => <div>{'Channel: livechat'}</div>,
})
