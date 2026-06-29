import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/channels/telegram')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/channels/telegram</div>
  ),
})
