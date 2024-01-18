import dynamic from 'next/dynamic'
import Link from 'next/link'
import EyeJayEsLogo from '@/lib/EyeJayEsLogo'
import { NAV_ROUTES } from '@/utils/constants'

const DarkModeSwitch = dynamic(() => import('../lib/DarkModeSwitch'), { ssr: false })

export default function DesktopMenu() {
	return (
		<div className="hidden md:flex items-center justify-between py-4">
			<Link
				className="transition-colors flex items-center gap-4 text-xl font-bold text-indigo dark:text-white"
				href="/"
			>
				<EyeJayEsLogo />
				Ian J. Smith
			</Link>
			<div className="flex items-center gap-4">
				<nav className="flex items-center gap-6 h-full">
					{NAV_ROUTES.map(({ href, title }) => (
						<Link
							key={title}
							className="relative group px-1 font-medium transition-colors text-indigo/70 dark:text-indigo-100/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:text-indigo dark:hover:text-indigo"
							href={href}
						>
							<span className="transition-all origin-bottom scale-y-0 absolute top-0 left-0 w-full h-full bg-orange dark:bg-yellow group-hover:scale-y-100" />
							<span className="relative">{title}</span>
						</Link>
					))}
				</nav>
				<DarkModeSwitch />
			</div>
		</div>
	)
}
