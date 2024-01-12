'use client'

import Link from 'next/link'
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
	const buttonClasses = useMemo<string>(() => {
		let classes =
			'transition-colors inline-flex items-center gap-x-2 font-medium rounded-full border disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-yellow'

		if (variant === 'outline')
			classes +=
				' border-indigo dark:border-white opacity-65 bg-transparent hover:bg-indigo dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-20 dark:hover:opacity-100 text-indigo dark:text-white'
		else if (variant === 'ghost') classes += ' border-transparent hover:bg-orange/20 dark:hover:bg-yellow/30'
		else
			classes +=
				' border-transparent bg-orange dark:bg-yellow text-indigo hover:bg-orange-500 dark:hover:bg-yellow/90'

		if (size === 'small') classes += ' text-xs py-2 px-3'
		else if (size === 'large') classes += ' py-3.5 px-5'
		else classes += ' text-sm py-3 px-4'

		if (className) classes += ` ${className}`

		return classes
	}, [className, size, variant])

	if (href)
		return (
			<Link className={buttonClasses} href={href} target={target}>
				{StartIcon ? <span>{StartIcon}</span> : null}
				{children}
				{EndIcon ? <span>{EndIcon}</span> : null}
			</Link>
		)

	return (
		<button className={buttonClasses} {...rest}>
			{StartIcon ? <span>{StartIcon}</span> : null}
			{children}
			{EndIcon ? <span>{EndIcon}</span> : null}
		</button>
	)
}
