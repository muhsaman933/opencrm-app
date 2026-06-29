import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/channels/bot')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/channels/bot</div>
  ),
})
