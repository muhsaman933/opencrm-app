import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/channels/whatsapp')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/channels/whatsapp</div>
  ),
})
