import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/codemap')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /codemap</div>
  ),
})
