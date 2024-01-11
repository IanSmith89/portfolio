'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NAV_ROUTES } from '@/utils/constants'
import EyeJayEsLogo from '@/lib/EyeJayEsLogo'
import { throttle } from '@/utils/helpers'

const DarkModeSwitch = dynamic(() => import('@/lib/DarkModeSwitch'), { ssr: false })

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isTransparent, setIsTransparent] = useState<boolean>(true)

	const handleHamburgerClick = () => {
		setIsOpen((prevIsOpen) => {
			document.body.style.overflow = prevIsOpen ? '' : 'hidden'
			return !prevIsOpen
		})
	}

	const handleLinkClick = () => {
		setTimeout(() => {
			document.body.style.overflow = ''
			setIsOpen(false)
		}, 200)
	}

	useEffect(() => {
		const handleScroll = throttle(() => {
			setIsTransparent(window.scrollY < 72)
		}, 150)

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div
			className={`md:hidden transition-colors fixed top-0 left-0 z-50 w-full h-[72px] ${
				isTransparent ? 'bg-transparent' : 'shadow-md bg-white dark:bg-grey-blue'
			}`}
		>
			<div className={`fixed inset-0 h-full ${isOpen ? '' : ' pointer-events-none'}`}>
				<div
					className={`transition-all absolute inset-0 flex flex-col justify-end pb-6 pl-6 bg-teal-100 dark:bg-grey-blue ${
						isOpen ? 'opacity-1' : 'opacity-0'
					}`}
				>
					<div className="absolute m-auto inset-0 left-6 flex flex-col gap-8 justify-center">
						{NAV_ROUTES.map(({ href, title }) => (
							<Link
								key={title}
								className="transition-colors text-indigo dark:text-teal text-6xl font-bold"
								href={href}
								onClick={handleLinkClick}
							>
								{title}
							</Link>
						))}
					</div>
					<DarkModeSwitch />
				</div>
				<Link
					className="transition-colors absolute top-[22px] left-4 flex items-center gap-3 text-lg font-bold text-indigo dark:text-white"
					href="/"
				>
					<EyeJayEsLogo width={80} />
					Ian J. Smith
				</Link>
			</div>
			<button
				aria-label="Mobile navigation"
				type="button"
				className="transition-colors fixed top-4 right-4 flex justify-center items-center gap-2 h-10 w-10 rounded-lg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-indigo dark:text-white"
				onClick={handleHamburgerClick}
			>
				<svg
					className="w-6 h-6"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<line
						className={`stroke-2 transition-transform origin-center ${
							isOpen ? 'transform -rotate-45' : ''
						}`}
						x1="2"
						y1="12"
						x2="22"
						y2="12"
					/>
					<line
						className={`stroke-2 transition-transform origin-bottom ${
							isOpen
								? '[transform:translate3d(-4px,-6px,0)rotate(45deg)]'
								: '[transform:translate3d(0,0,0)rotate(0)]'
						}`}
						x1="8.4"
						y1="18"
						x2="22"
						y2="18"
					/>
					<line
						className={`stroke-2 transition-transform origin-top ${
							isOpen
								? '[transform:translate3d(3px,8px,0)rotate(45deg)]'
								: '[transform:translate3d(0,0,0)rotate(0)]'
						}`}
						x1="2"
						y1="6"
						x2="15.6"
						y2="6"
					/>
				</svg>
			</button>
		</div>
	)
}
