import dynamic from 'next/dynamic'
import Link from 'next/link'
import EyeJayEsLogo from './EyeJayEsLogo'
import { NAV_ROUTES } from '../utils/constants'

const DarkModeSwitch = dynamic(() => import('./DarkModeSwitch'), { ssr: false })

export default function DesktopMenu() {
	return (
		<div className="hidden md:flex items-center justify-between">
			<Link
				className="transition-colors flex items-center gap-4 text-xl font-bold text-indigo dark:text-white"
				href="/"
			>
				<EyeJayEsLogo />
				Ian J. Smith
			</Link>
			<div className="flex items-center gap-6">
				<nav className="flex items-center gap-6 h-full">
					{NAV_ROUTES.map(({ href, title }) => (
						<Link
							key={title}
							className="transition-colors text-indigo dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							href={href}
						>
							{title}
						</Link>
					))}
				</nav>
				<DarkModeSwitch />
			</div>
		</div>
	)
}
