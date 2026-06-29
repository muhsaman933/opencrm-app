import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/developers/api-tools')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/developers/api-tools</div>
  ),
})
