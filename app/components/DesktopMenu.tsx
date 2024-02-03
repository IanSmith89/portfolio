import dynamic from 'next/dynamic'
import Link from 'next/link'
import EyeJayEsLogo from '@/lib/EyeJayEsLogo'
import { NAV_ROUTES } from '@/utils/constants'
import Blob from '@/lib/Blob'
import Circle from '@/lib/Circle'
import LinedBlob from '@/lib/LinedBlob'
import Flash from '@/lib/Flash'

const DarkModeSwitch = dynamic(() => import('../lib/DarkModeSwitch'), {
	ssr: false,
	loading: () => <div className="w-[100px] h-6" />,
})

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
					{NAV_ROUTES.map(({ href, title }, i) => (
						<Link
							key={title}
							className="relative group px-1 font-medium transition-colors text-indigo/70 dark:text-indigo-100/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 hover:text-indigo dark:hover:text-white"
							href={href}
						>
							{i === 0 ? (
								<Blob className="transition-opacity opacity-0 group-hover:opacity-70 h-[125%] absolute -top-[12.5%] -left-1" />
							) : null}
							{i === 1 ? (
								<Circle
									className="transition-opacity opacity-0 group-hover:opacity-70 h-[110%] absolute -top-[4%] -left-1"
									circleClassName="fill-red/70 dark:fill-red/50 mix-blend-hard-light"
								/>
							) : null}
							{i === 2 ? (
								<LinedBlob className="transition-opacity opacity-0 group-hover:opacity-70 h-[110%] absolute -top-[5%] -left-1" />
							) : null}
							{i === 3 ? (
								<Flash className="transition-opacity opacity-0 group-hover:opacity-70 h-[125%] absolute -top-[12.5%] -left-1" />
							) : null}
							<span className="relative">{title}</span>
						</Link>
					))}
				</nav>
				<DarkModeSwitch />
			</div>
		</div>
	)
}
