'use client'

import { useEffect, useState } from 'react'
import { throttle } from '@/utils/helpers'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

export default function Header() {
	const [isTransparent, setIsTransparent] = useState<boolean>(true)

	useEffect(() => {
		const handleScroll = throttle(() => {
			setIsTransparent(window.scrollY < 160)
		}, 150)

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<header
				className={`fixed z-50 top-0 transition-colors w-full filter backdrop-blur-md min-h-16 ${
					isTransparent ? 'bg-transparent' : 'bg-white/50 dark:bg-indigo/50'
				}`}
			>
				<div className="container">
					<MobileMenu />
					<DesktopMenu />
				</div>
			</header>
			<div className="mb-16" />
		</>
	)
}
