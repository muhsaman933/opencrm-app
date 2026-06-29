import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/team')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/team</div>
  ),
})
