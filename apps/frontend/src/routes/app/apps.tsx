import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/apps')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/apps</div>
  ),
})
