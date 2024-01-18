export type ThemeSectionProps = {
	background: 'light' | 'dark'
	children: React.ReactNode
}

export default function ThemeSection({ background, children }: ThemeSectionProps) {
	return (
		<section className={`py-8 md:pt-12 lg:pt-16 ${background === 'light' ? 'bg-white dark:bg-grey-blue/50' : ''}`}>
			{children}
		</section>
	)
}
