import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/developers/api-tools/new')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/developers/api-tools/new</div>
  ),
})
