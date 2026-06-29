# Frontend Source Reference - src/components/ui/separator.tsx

Original source path: `apps/frontend/src/components/ui/separator.tsx`
Line count: 24
SHA-256: `e2997556ee1b9ccac9183d5459da29540a95dcabec3d8b0d65dc4c18d6e10800`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { Separator as SeparatorPrimitive } from '@base-ui/react/separator'

import { cn } from '@/lib/utils'

function Separator({
	className,
	orientation = 'horizontal',
	...props
}: SeparatorPrimitive.Props) {
	return (
		<SeparatorPrimitive
			data-slot="separator"
			orientation={orientation}
			className={cn(
				'bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch',
				className,
			)}
			{...props}
		/>
	)
}

export { Separator }

````
