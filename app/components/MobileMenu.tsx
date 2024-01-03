'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ROUTES } from '../utils/constants'
import EyeJayEsLogo from './EyeJayEsLogo'

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleClick = () => {
		setIsOpen((prevIsOpen) => {
			document.body.style.overflow = prevIsOpen ? '' : 'hidden'
			return !prevIsOpen
		})
	}

	return (
		<div className="sm:hidden">
			<div
				className={`absolute inset-0 flex flex-col gap-8 justify-center pl-6 bg-indigo transition-opacity ${
					isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'
				}`}
			>
				{ROUTES.map(({ href, title }) => (
					<Link key={title} className="text-teal text-6xl font-bold" href={href}>
						{title}
					</Link>
				))}
			</div>
			<Link
				className={`absolute top-[22px] left-4 flex items-center gap-3 text-lg font-bold ${
					isOpen ? 'text-white' : 'text-indigo'
				}`}
				href="/"
			>
				<EyeJayEsLogo width={80} />
				Ian J. Smith
			</Link>
			<button
				aria-label="Mobile navigation"
				type="button"
				className={`absolute top-4 right-4 flex justify-center items-center gap-2 h-10 w-10 rounded-lg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${
					isOpen ? 'text-white' : 'text-indigo'
				}`}
				onClick={handleClick}
			>
				<svg
					className="w-6 h-6"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<line x1="2" y1="12" x2="22" y2="12" />
					<line x1="8.4" y1="18" x2="22" y2="18" />
					<line x1="2" y1="6" x2="15.6" y2="6" />
				</svg>
			</button>
		</div>
	)
}
