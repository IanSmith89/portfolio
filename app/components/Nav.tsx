'use client'

import Link from 'next/link'
import { screens } from 'tailwindcss/defaultTheme'
import { useMediaQuery } from 'usehooks-ts'
import EyeJayEsLogo from './EyeJayEsLogo'
import MobileMenu from './MobileMenu'
import { ROUTES } from '../utils/constants'

export default function Nav() {
	const matches = useMediaQuery(`(min-width: ${screens.sm})`)

	return (
		<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-teal text-sm py-4 dark:bg-indigo">
			<nav className="container flex items-center justify-between" aria-label="Global">
				<Link
					className="flex items-center pt-[6px] sm:pt-0 gap-3 sm:gap-4 text-lg sm:text-xl font-bold text-indigo"
					href="/"
				>
					<EyeJayEsLogo width={matches ? 100 : 80} />
					Ian J. Smith
				</Link>
				{matches ? (
					<div className="flex items-center gap-6 h-full">
						{ROUTES.map(({ href, title }) => (
							<Link
								key={title}
								className="text-indigo dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								href={href}
							>
								{title}
							</Link>
						))}
					</div>
				) : (
					<MobileMenu />
				)}
			</nav>
		</header>
	)
}
