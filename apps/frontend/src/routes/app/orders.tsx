import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/orders')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/orders</div>
  ),
})
