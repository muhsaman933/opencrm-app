# Frontend Source Reference - src/components/ui/breadcrumb.tsx

Original source path: `apps/frontend/src/components/ui/breadcrumb.tsx`
Line count: 123
SHA-256: `da34935db396588236258f5e61790a4544eba2319ab8c4cae3e839733061dd7e`

Use this file as an exact source-shape reference when rebuilding the matching frontend file. Preserve imports, API calls, class names, config keys, route behavior, localStorage/cookie keys, and env variable names unless `OPENCLAW.md` explicitly overrides a visible navigation scope.

````tsx
import type * as React from 'react'
import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'

import { cn } from '@/lib/utils'
import { ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react'

function Breadcrumb({ className, ...props }: React.ComponentProps<'nav'>) {
	return (
		<nav
			aria-label="breadcrumb"
			data-slot="breadcrumb"
			className={cn(className)}
			{...props}
		/>
	)
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
	return (
		<ol
			data-slot="breadcrumb-list"
			className={cn(
				'text-muted-foreground gap-1.5 text-sm flex flex-wrap items-center wrap-break-word',
				className,
			)}
			{...props}
		/>
	)
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
	return (
		<li
			data-slot="breadcrumb-item"
			className={cn('gap-1 inline-flex items-center', className)}
			{...props}
		/>
	)
}

function BreadcrumbLink({
	className,
	render,
	...props
}: useRender.ComponentProps<'a'>) {
	return useRender({
		defaultTagName: 'a',
		props: mergeProps<'a'>(
			{
				className: cn('hover:text-foreground transition-colors', className),
			},
			props,
		),
		render,
		state: {
			slot: 'breadcrumb-link',
		},
	})
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			data-slot="breadcrumb-page"
			role="link"
			aria-disabled="true"
			aria-current="page"
			className={cn('text-foreground font-normal', className)}
			{...props}
		/>
	)
}

function BreadcrumbSeparator({
	children,
	className,
	...props
}: React.ComponentProps<'li'>) {
	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			className={cn('[&>svg]:size-3.5', className)}
			{...props}
		>
			{children ?? <ChevronRightIcon />}
		</li>
	)
}

function BreadcrumbEllipsis({
	className,
	...props
}: React.ComponentProps<'span'>) {
	return (
		<span
			data-slot="breadcrumb-ellipsis"
			role="presentation"
			aria-hidden="true"
			className={cn(
				'size-5 [&>svg]:size-4 flex items-center justify-center',
				className,
			)}
			{...props}
		>
			<MoreHorizontalIcon />
			<span className="sr-only">More</span>
		</span>
	)
}

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
}

````
