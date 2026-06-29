# Frontend Source Reference - src/components/ui/slider.tsx

Original source path: `apps/frontend/src/components/ui/slider.tsx`
Line count: 60
SHA-256: `7b23ad0b95263296cfafd666e626a1cc7e7c56c93126e064af0964e4de4c2536`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
'use client'

import * as React from 'react'
import { Slider as SliderPrimitive } from '@base-ui/react/slider'

import { cn } from '@/lib/utils'

function Slider({
	className,
	defaultValue,
	value,
	min = 0,
	max = 100,
	...props
}: SliderPrimitive.Root.Props) {
	const _values = React.useMemo(
		() =>
			Array.isArray(value)
				? value
				: Array.isArray(defaultValue)
					? defaultValue
					: [min, max],
		[value, defaultValue, min, max],
	)

	return (
		<SliderPrimitive.Root
			className={cn('data-horizontal:w-full data-vertical:h-full', className)}
			data-slot="slider"
			defaultValue={defaultValue}
			value={value}
			min={min}
			max={max}
			thumbAlignment="edge"
			{...props}
		>
			<SliderPrimitive.Control className="data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col">
				<SliderPrimitive.Track
					data-slot="slider-track"
					className="bg-muted rounded-full data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1 relative grow overflow-hidden select-none"
				>
					<SliderPrimitive.Indicator
						data-slot="slider-range"
						className="bg-primary select-none data-horizontal:h-full data-vertical:w-full"
					/>
				</SliderPrimitive.Track>
				{Array.from({ length: _values.length }, (_, index) => (
					<SliderPrimitive.Thumb
						data-slot="slider-thumb"
						key={index}
						className="border-ring ring-ring/50 relative size-3 rounded-full border bg-white transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
					/>
				))}
			</SliderPrimitive.Control>
		</SliderPrimitive.Root>
	)
}

export { Slider }

````
