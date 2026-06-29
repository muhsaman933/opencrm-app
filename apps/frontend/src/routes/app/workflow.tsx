import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/workflow')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/workflow</div>
  ),
})
