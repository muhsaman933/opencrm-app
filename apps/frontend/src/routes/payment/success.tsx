import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/payment/success')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /payment/success</div>
  ),
})
