import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/flows/index')({
	component: () => (
		<div className='p-6'>OpenCRM route — app/flows/index.tsx</div>
	),
})
