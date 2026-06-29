# Frontend Source Reference - src/components/ui/radio-group.tsx

Original source path: `apps/frontend/src/components/ui/radio-group.tsx`
Line count: 38
SHA-256: `350a80094a3216f81caf5df21bd2a1390cedffde8893395277612e13b1b88cfb`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import { Radio as RadioPrimitive } from '@base-ui/react/radio'
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group'

import { cn } from '@/lib/utils'
import { CircleIcon } from 'lucide-react'

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
	return (
		<RadioGroupPrimitive
			data-slot="radio-group"
			className={cn('grid gap-2 w-full', className)}
			{...props}
		/>
	)
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
	return (
		<RadioPrimitive.Root
			data-slot="radio-group-item"
			className={cn(
				'border-input text-primary dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex size-4 rounded-full focus-visible:ring-3 aria-invalid:ring-3 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<RadioPrimitive.Indicator
				data-slot="radio-group-indicator"
				className="group-aria-invalid/radio-group-item:text-destructive text-primary flex size-4 items-center justify-center"
			>
				<CircleIcon className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" />
			</RadioPrimitive.Indicator>
		</RadioPrimitive.Root>
	)
}

export { RadioGroup, RadioGroupItem }

````
