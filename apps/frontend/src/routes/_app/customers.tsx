import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const Customers = lazy(() => import('@/features/customers/CustomersPage'))

export const Route = createFileRoute('/_app/customers')({
  component: () => (
    <Suspense fallback={<div className="p-6">Loading customers…</div>}>
      <Customers />
    </Suspense>
  ),
})
