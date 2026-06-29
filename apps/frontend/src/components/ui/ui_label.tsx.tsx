# Frontend Source Reference - src/components/ui/label.tsx

Original source path: `apps/frontend/src/components/ui/label.tsx`
Line count: 21
SHA-256: `857b81711bb73332de09b5f80297c7ec585c221fade92274dde0692014e46829`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
'use client'

import type * as React from 'react'

import { cn } from '@/lib/utils'

function Label({ className, ...props }: React.ComponentProps<'label'>) {
	return (
		<label
			data-slot="label"
			className={cn(
				'gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed',
				className,
			)}
			{...props}
		/>
	)
}

export { Label }

````
