import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/products')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/products</div>
  ),
})
