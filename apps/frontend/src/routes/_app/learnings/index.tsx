import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const Learnings = lazy(() => import('@/features/learnings/LearningsPage'))

export const Route = createFileRoute('/_app/learnings')({
  component: () => (
    <Suspense fallback={<div className="p-6">Loading learnings…</div>}>
      <Learnings />
    </Suspense>
  ),
})
