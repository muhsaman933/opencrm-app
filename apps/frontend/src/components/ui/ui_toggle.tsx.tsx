# Frontend Source Reference - src/components/ui/toggle.tsx

Original source path: `apps/frontend/src/components/ui/toggle.tsx`
Line count: 43
SHA-256: `93913fa9540937bb6aa6348c5f92d5e2325874a3265f28db7f727b5f49c6bfae`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const toggleVariants = cva(
	"hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=on]:bg-muted gap-1 rounded-lg text-sm font-medium transition-all [&_svg:not([class*='size-'])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				outline: 'border-input hover:bg-muted border bg-transparent',
			},
			size: {
				default: 'h-8 min-w-8 px-2',
				sm: 'h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-1.5 text-[0.8rem]',
				lg: 'h-9 min-w-9 px-2.5',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

function Toggle({
	className,
	variant = 'default',
	size = 'default',
	...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
	return (
		<TogglePrimitive
			data-slot="toggle"
			className={cn(toggleVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Toggle, toggleVariants }

````
