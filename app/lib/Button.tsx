'use client'

import Link from '@/lib/Link'
import { useMemo } from 'react'

export interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	EndIcon?: React.ReactNode
	href?: string
	size?: 'small' | 'medium' | 'large'
	StartIcon?: React.ReactNode
	target?: '_blank' | '_parent' | '_self' | '_top'
	variant?: 'solid' | 'outline' | 'ghost' | 'link'
}

export default function Button({
	children,
	className = '',
	EndIcon,
	href = '',
	size = 'medium',
	StartIcon,
	target = '_self',
	variant = 'solid',
	...rest
}: ButtonProps) {
	const isLink = Boolean(href)
	const buttonClasses = useMemo<string>(() => {
		let classes =
			'transition-colors inline-flex items-center gap-x-2 font-medium rounded-full border disabled:opacity-50 disabled:pointer-events-none'

		if (!isLink)
			classes += ' outline-none focus-visible:ring focus-visible:ring-indigo dark:focus-visible:ring-teal'

		if (variant === 'outline')
			classes +=
				' border-indigo/70 dark:border-white/70 hover:border-indigo dark:hover:border-white bg-transparent hover:bg-indigo hover:bg-indigo/5 dark:hover:bg-white/15 text-indigo dark:text-white'
		else if (variant === 'ghost') classes += ' border-transparent hover:bg-indigo/10 dark:hover:bg-white/15'
		else
			classes +=
				' border-transparent bg-orange dark:bg-yellow text-indigo hover:bg-orange-500 dark:hover:bg-yellow/90'

		if (size === 'small') classes += ' text-xs py-2 px-3'
		else if (size === 'large') classes += ' py-3 px-5'
		else classes += ' text-sm py-2.5 px-4'

		if (className) classes += ` ${className}`

		return classes
	}, [className, isLink, size, variant])

	const buttonContent = (
		<>
			{StartIcon ? <span>{StartIcon}</span> : null}
			{children}
			{EndIcon ? <span>{EndIcon}</span> : null}
		</>
	)

	if (isLink)
		return (
			<Link className={buttonClasses} href={href} target={target}>
				{buttonContent}
			</Link>
		)

	return (
		<button className={buttonClasses} {...rest}>
			{buttonContent}
		</button>
	)
}
