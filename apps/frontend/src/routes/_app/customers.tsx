import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const Customers = lazy(() => import('@/features/Customers/CustomersPage'))

export const Route = createFileRoute('/_app/Customers')({
  component: () => (
    <Suspense fallback={<div className="p-6">Loading Customers…</div>}>
      <Customers />
    </Suspense>
  ),
})
