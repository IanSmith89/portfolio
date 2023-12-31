'use client'

import { useMemo } from 'react'

export interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	href?: string
	target?: '_blank' | '_parent' | '_self' | '_top'
	variant?: 'solid' | 'outline' | 'ghost' | 'link'
}

export default function Button({
	children,
	className = '',
	href = '',
	target = '_self',
	variant = 'solid',
	...rest
}: ButtonProps) {
	const buttonClasses = useMemo<string>(() => {
		let classes =
			'transition-colors py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-yellow'

		if (variant === 'outline')
			classes +=
				' border-indigo dark:border-white opacity-65 bg-transparent hover:bg-indigo dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-20 dark:hover:opacity-100 text-indigo dark:text-white'
		else
			classes +=
				' border-transparent bg-orange dark:bg-yellow text-indigo hover:bg-orange-500 dark:hover:bg-yellow dark:hover:bg-opacity-90'

		if (className) classes += ` ${className}`

		return classes
	}, [className, variant])

	if (href)
		return (
			<a className={buttonClasses} href={href} target={target}>
				{children}
			</a>
		)

	return (
		<button className={buttonClasses} {...rest}>
			{children}
		</button>
	)
}
