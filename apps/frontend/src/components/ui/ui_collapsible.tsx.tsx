# Frontend Source Reference - src/components/ui/collapsible.tsx

Original source path: `apps/frontend/src/components/ui/collapsible.tsx`
Line count: 20
SHA-256: `351b03c58dd066d7f8ee66d68bb7eb2b1b2d57dca038b49ce170becb57e25682`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible'

function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
	return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({ ...props }: CollapsiblePrimitive.Trigger.Props) {
	return (
		<CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
	)
}

function CollapsibleContent({ ...props }: CollapsiblePrimitive.Panel.Props) {
	return (
		<CollapsiblePrimitive.Panel data-slot="collapsible-content" {...props} />
	)
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

````
