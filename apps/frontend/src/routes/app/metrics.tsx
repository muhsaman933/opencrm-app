import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/metrics')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/metrics</div>
  ),
})
