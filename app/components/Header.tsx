import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

export default function Header() {
	return (
		<header className="w-full bg-teal dark:bg-indigo">
			<div className="container py-9 md:py-6">
				<MobileMenu />
				<DesktopMenu />
			</div>
		</header>
	)
}
