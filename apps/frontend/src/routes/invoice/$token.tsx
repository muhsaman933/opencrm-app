import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/invoice/token')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /invoice/$token</div>
  ),
})
