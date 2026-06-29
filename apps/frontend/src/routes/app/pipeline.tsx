import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/pipeline')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/pipeline</div>
  ),
})
