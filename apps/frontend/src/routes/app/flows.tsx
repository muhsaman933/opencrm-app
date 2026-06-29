import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/flows')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/flows</div>
  ),
})
