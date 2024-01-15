'use client'

import { useEffect, useState } from 'react'
import { throttle } from '@/utils/helpers'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

export default function Header() {
	const [isTransparent, setIsTransparent] = useState<boolean>(true)

	useEffect(() => {
		const handleScroll = throttle(() => {
			setIsTransparent(window.scrollY < 200)
		}, 150)

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<header
				className={`fixed z-50 top-0 transition-colors w-full filter backdrop-blur-md min-h-16 border-b-[1px] ${
					isTransparent
						? 'bg-transparent border-transparent'
						: 'bg-white/50 dark:bg-grey-blue/50 border-b-indigo/5 dark:border-b-white/5'
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
