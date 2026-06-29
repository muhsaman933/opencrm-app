import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/inbox')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/inbox</div>
  ),
})
