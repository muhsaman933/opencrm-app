import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute({
	path: '/_app/channels/whatsapp',
	loader: () => ({ ok: true }),
	component: () => <div>{'Channel: whatsapp'}</div>,
})
