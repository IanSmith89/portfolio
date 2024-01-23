export type ContentTitleProps = {
	children: string
	center?: boolean
}

export default function ContentTitle({ children, center = false }: ContentTitleProps) {
	let classes = 'font-medium text-2xl md:text-3xl mb-4'

	if (center) classes += ' text-center'

	return <h3 className={classes}>{children}</h3>
}
