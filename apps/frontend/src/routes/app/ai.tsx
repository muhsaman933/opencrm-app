import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/ai')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/ai</div>
  ),
})
