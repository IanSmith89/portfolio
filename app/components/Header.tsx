import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

export default function Header() {
	return (
		<header className="z-50 w-full bg-teal dark:bg-indigo py-8">
			<div className="container">
				<MobileMenu />
				<DesktopMenu />
			</div>
		</header>
	)
}
