# Backend Source Reference - src/modules/index.ts

Original source path: `apps/backend/src/modules/index.ts`
Line count: 37
SHA-256: `a9a5840df8722a3b5fe55047c8d46e3afd6456f0fe651c0baeff711ded1769b8`

Use this file as an exact source-shape reference when rebuilding the matching backend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````ts
// Core modules

export { agent as agentManagement } from './agent'
export { agentSettings } from './agent-settings'
export { ai } from './ai'
export { apiTools } from './api-tools'
export { authModule } from './auth'
export { businessWebhooks } from './business-webhooks'
export { broadcast } from './broadcast'
export { cannedResponse } from './canned-response'
export { chatbot } from './chatbot'
export { contact } from './contact'
export { customer } from './customer'
export { developerKeys } from './developer-keys'
export { conversation } from './conversation'
export { crm } from './crm'
export { flow } from './flow'
export { form } from './form'
export { handover } from './handover'
export { inbox } from './inbox'
export { knowledge } from './knowledge'
export { label } from './label'
export { media } from './media'
export { message } from './message'
export { metrics } from './metrics'
export { orchestration } from './orchestration'
export { orders } from './orders'
export { commerce } from './commerce'
export { team as teamModule } from './team'
export { templateVariables } from './template-variables'
export { user as userModule } from './user'
export { webhook } from './webhook'
export { webhooks } from './webhooks'
export { whatsapp } from './whatsapp'
export { whatsappModule } from './whatsapp-templates'
export { waba } from './waba'

````
