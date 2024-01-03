import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

export default function Header() {
	return (
		<header className="z-50 w-full bg-teal dark:bg-indigo">
			<div className="container py-9 sm:py-6">
				<MobileMenu />
				<DesktopMenu />
			</div>
		</header>
	)
}
