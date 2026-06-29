import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/terms')({
	component: () => (
		<div className='p-6'>OpenCRM route — app/terms.tsx</div>
	),
})
