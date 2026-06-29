import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/channels/facebook')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/channels/facebook</div>
  ),
})
