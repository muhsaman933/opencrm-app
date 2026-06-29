import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/developers/-model')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/developers/-model</div>
  ),
})
