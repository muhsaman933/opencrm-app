import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/ai-agents/agentId')({
  component: () => (
    <div className=\"p-6\">OpenCRM route — /app/ai-agents/$agentId</div>
  ),
})
