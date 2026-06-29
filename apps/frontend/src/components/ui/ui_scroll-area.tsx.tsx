# Frontend Source Reference - src/components/ui/scroll-area.tsx

Original source path: `apps/frontend/src/components/ui/scroll-area.tsx`
Line count: 54
SHA-256: `e9787cb3cdf9c4bc40bb983f4a2e76c385e9c86ef64ab28da115ef6e338c9baf`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import * as React from 'react'
import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area'

import { cn } from '@/lib/utils'

function ScrollArea({
	className,
	children,
	...props
}: ScrollAreaPrimitive.Root.Props) {
	return (
		<ScrollAreaPrimitive.Root
			data-slot="scroll-area"
			className={cn('relative', className)}
			{...props}
		>
			<ScrollAreaPrimitive.Viewport
				data-slot="scroll-area-viewport"
				className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
			>
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	)
}

function ScrollBar({
	className,
	orientation = 'vertical',
	...props
}: ScrollAreaPrimitive.Scrollbar.Props) {
	return (
		<ScrollAreaPrimitive.Scrollbar
			data-slot="scroll-area-scrollbar"
			data-orientation={orientation}
			orientation={orientation}
			className={cn(
				'data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none',
				className,
			)}
			{...props}
		>
			<ScrollAreaPrimitive.Thumb
				data-slot="scroll-area-thumb"
				className="rounded-full bg-border relative flex-1"
			/>
		</ScrollAreaPrimitive.Scrollbar>
	)
}

export { ScrollArea, ScrollBar }

````
