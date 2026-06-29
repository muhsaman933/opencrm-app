import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const Outbound = lazy(() => import('@/features/outbound/OutboundPage'))

export const Route = createFileRoute('/_app/outbound')({
  component: () => (
    <Suspense fallback={<div className="p-6">Loading outbound…</div>}>
      <Outbound />
    </Suspense>
  ),
})
