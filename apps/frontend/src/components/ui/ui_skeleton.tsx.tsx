# Frontend Source Reference - src/components/ui/skeleton.tsx

Original source path: `apps/frontend/src/components/ui/skeleton.tsx`
Line count: 14
SHA-256: `18c5333a58a1574c2dcd6ad1bc897dcaebd2fa15b6ee3f2dd9f76d099266546a`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="skeleton"
			className={cn('bg-muted rounded-md animate-pulse', className)}
			{...props}
		/>
	)
}

export { Skeleton }

````
