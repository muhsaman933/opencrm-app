# Frontend Source Reference - src/components/ui/spinner.tsx

Original source path: `apps/frontend/src/components/ui/spinner.tsx`
Line count: 16
SHA-256: `702dd0e513be189440d88caa0964d3b0d2ff855b2f8bf15aed465ea0618df1e9`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { cn } from '@/lib/utils'
import { Loader2Icon } from 'lucide-react'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
	return (
		<Loader2Icon
			role="status"
			aria-label="Loading"
			className={cn('size-4 animate-spin', className)}
			{...props}
		/>
	)
}

export { Spinner }

````
