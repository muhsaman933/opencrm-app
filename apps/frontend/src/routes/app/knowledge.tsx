import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/knowledge')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/knowledge</div>
  ),
})
