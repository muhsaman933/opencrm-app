import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/templates')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/templates</div>
  ),
})
