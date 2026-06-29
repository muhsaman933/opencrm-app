import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/product-stock')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/product-stock</div>
  ),
})
