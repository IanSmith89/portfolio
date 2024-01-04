'use client'

import { useMemo } from 'react'

export type ButtonProps = {
	children: React.ReactNode
	className?: string
	type?: 'button' | 'submit' | 'reset'
	variant?: 'solid' | 'outline' | 'ghost' | 'link'
}

export default function Button({ children, className = '', type = 'button', variant = 'solid' }: ButtonProps) {
	const buttonClasses = useMemo<string>(() => {
		if (variant === 'outline')
			return 'border-indigo dark:border-white bg-transparent hover:bg-indigo dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 text-indigo dark:text-white'

		return 'border-transparent bg-orange dark:bg-yellow text-indigo hover:bg-orange-500 dark:hover:bg-opacity-90'
	}, [variant])

	return (
		<button
			className={`transition-colors py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-yellow ${buttonClasses} ${className}`}
			type={type}
		>
			{children}
		</button>
	)
}
