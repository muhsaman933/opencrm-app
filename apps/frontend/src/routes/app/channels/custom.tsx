import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/channels/custom')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/channels/custom</div>
  ),
})
