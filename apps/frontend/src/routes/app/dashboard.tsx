import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/dashboard')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/dashboard</div>
  ),
})
