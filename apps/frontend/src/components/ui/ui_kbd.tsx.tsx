# Frontend Source Reference - src/components/ui/kbd.tsx

Original source path: `apps/frontend/src/components/ui/kbd.tsx`
Line count: 27
SHA-256: `34e6f739e4e690b06419ad33373722ab2251db39f2a345df41fc2f5cc6f82d9b`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { cn } from '@/lib/utils'

function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
	return (
		<kbd
			data-slot="kbd"
			className={cn(
				"bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 h-5 w-fit min-w-5 gap-1 rounded-sm px-1 font-sans text-xs font-medium [&_svg:not([class*='size-'])]:size-3 pointer-events-none inline-flex items-center justify-center select-none",
				className,
			)}
			{...props}
		/>
	)
}

function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<kbd
			data-slot="kbd-group"
			className={cn('gap-1 inline-flex items-center', className)}
			{...props}
		/>
	)
}

export { Kbd, KbdGroup }

````
