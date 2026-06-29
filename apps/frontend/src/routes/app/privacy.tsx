import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/privacy')({
	component: () => (
		<div className='p-6'>OpenCRM route — app/privacy.tsx</div>
	),
})
