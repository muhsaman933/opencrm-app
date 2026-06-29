# Frontend Source Reference - src/components/ui/aspect-ratio.tsx

Original source path: `apps/frontend/src/components/ui/aspect-ratio.tsx`
Line count: 23
SHA-256: `d9aeb945f90f34e088226ad682014c3bb79b00c5cb28f0a7b8edf3fbf304831e`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { cn } from '@/lib/utils'

function AspectRatio({
	ratio,
	className,
	...props
}: React.ComponentProps<'div'> & { ratio: number }) {
	return (
		<div
			data-slot="aspect-ratio"
			style={
				{
					'--ratio': ratio,
				} as React.CSSProperties
			}
			className={cn('relative aspect-(--ratio)', className)}
			{...props}
		/>
	)
}

export { AspectRatio }

````
