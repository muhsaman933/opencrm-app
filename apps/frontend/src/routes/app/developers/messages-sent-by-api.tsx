import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/developers/messages-sent-by-api')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/developers/messages-sent-by-api</div>
  ),
})
