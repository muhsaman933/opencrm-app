import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/apps/appSlug')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/apps/$appSlug</div>
  ),
})
