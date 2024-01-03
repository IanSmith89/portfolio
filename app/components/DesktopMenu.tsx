import dynamic from 'next/dynamic'
import Link from 'next/link'
import EyeJayEsLogo from './EyeJayEsLogo'
import { ROUTES } from '../utils/constants'

const DarkModeSwitch = dynamic(() => import('./DarkModeSwitch'), { ssr: false })

export default function DesktopMenu() {
	return (
		<div className="hidden sm:flex items-center justify-between">
			<Link className="flex items-center gap-4 text-xl font-bold text-indigo dark:text-white" href="/">
				<EyeJayEsLogo />
				Ian J. Smith
			</Link>
			<div className="flex items-center gap-6">
				<nav className="flex items-center gap-6 h-full">
					{ROUTES.map(({ href, title }) => (
						<Link
							key={title}
							className="text-indigo dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
