import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const Flows = lazy(() => import('@/features/flows/FlowsPage'))

export const Route = createFileRoute('/_app/flows')({
  component: () => (
    <Suspense fallback={<div className="p-6">Loading flows…</div>}>
      <Flows />
    </Suspense>
  ),
})
