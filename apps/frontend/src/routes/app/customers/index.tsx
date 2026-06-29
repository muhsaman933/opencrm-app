import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/customers/index')({
	component: () => (
		<div className='p-6'>OpenCRM route — app/customers/index.tsx</div>
	),
})
