import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/customers')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/customers</div>
  ),
})
