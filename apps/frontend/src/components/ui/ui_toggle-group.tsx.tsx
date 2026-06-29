# Frontend Source Reference - src/components/ui/toggle-group.tsx

Original source path: `apps/frontend/src/components/ui/toggle-group.tsx`
Line count: 90
SHA-256: `ab9cd33b4bd5544662700450f8ca395416ff26ad84d72be77829957e22af8215`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
'use client'

import * as React from 'react'
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle'
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { toggleVariants } from '@/components/ui/toggle'

const ToggleGroupContext = React.createContext<
	VariantProps<typeof toggleVariants> & {
		spacing?: number
		orientation?: 'horizontal' | 'vertical'
	}
>({
	size: 'default',
	variant: 'default',
	spacing: 0,
	orientation: 'horizontal',
})

function ToggleGroup({
	className,
	variant,
	size,
	spacing = 0,
	orientation = 'horizontal',
	children,
	...props
}: ToggleGroupPrimitive.Props &
	VariantProps<typeof toggleVariants> & {
		spacing?: number
		orientation?: 'horizontal' | 'vertical'
	}) {
	return (
		<ToggleGroupPrimitive
			data-slot="toggle-group"
			data-variant={variant}
			data-size={size}
			data-spacing={spacing}
			data-orientation={orientation}
			style={{ '--gap': spacing } as React.CSSProperties}
			className={cn(
				'rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-vertical:flex-col data-vertical:items-stretch',
				className,
			)}
			{...props}
		>
			<ToggleGroupContext.Provider
				value={{ variant, size, spacing, orientation }}
			>
				{children}
			</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive>
	)
}

function ToggleGroupItem({
	className,
	children,
	variant = 'default',
	size = 'default',
	...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
	const context = React.useContext(ToggleGroupContext)

	return (
		<TogglePrimitive
			data-slot="toggle-group-item"
			data-variant={context.variant || variant}
			data-size={context.size || size}
			data-spacing={context.spacing}
			className={cn(
				'group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg shrink-0 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t',
				toggleVariants({
					variant: context.variant || variant,
					size: context.size || size,
				}),
				className,
			)}
			{...props}
		>
			{children}
		</TogglePrimitive>
	)
}

export { ToggleGroup, ToggleGroupItem }

````
