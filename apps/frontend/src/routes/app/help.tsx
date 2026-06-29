import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/help')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/help</div>
  ),
})
