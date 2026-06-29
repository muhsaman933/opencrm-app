import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const Kanban = lazy(() => import('@/features/kanban/KanbanPage'))

export const Route = createFileRoute('/_app/kanban')({
  component: () => (
    <Suspense fallback={<div className="p-6">Loading kanban…</div>}>
      <Kanban />
    </Suspense>
  ),
})
