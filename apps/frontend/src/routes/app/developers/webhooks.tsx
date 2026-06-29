import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/developers/webhooks')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/developers/webhooks</div>
  ),
})
