export type ThemeSectionProps = {
	background: 'light' | 'dark'
	center?: boolean
	children: React.ReactNode
}

export default function ThemeSection({ background, center = false, children }: ThemeSectionProps) {
	return (
		<section className={`py-8 md:pt-12 lg:pt-16 ${background === 'light' ? 'bg-white dark:bg-grey-blue/50' : ''}`}>
			<div className={`container ${center ? 'flex flex-col items-center' : ''}`}>{children}</div>
		</section>
	)
}
