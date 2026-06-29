import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/channels/whatsapp/channelId')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/channels/whatsapp/$channelId</div>
  ),
})
