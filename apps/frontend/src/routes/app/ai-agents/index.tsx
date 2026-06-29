import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/ai-agents/index')({
	component: () => (
		<div className='p-6'>OpenCRM route — app/ai-agents/index.tsx</div>
	),
})
