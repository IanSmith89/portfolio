export type TextBlock = {
	content: string[]
	title: string
	type: 'text'
}

export type ListItem = {
	detail: string
	title: string
}

export type ListBlock = {
	content: ListItem[]
	title: string
	type: 'list'
}

export type ContainerProjectSection = {
	background: 'light' | 'dark'
	content: (TextBlock | ListBlock)[]
	type: 'container'
}

export type HeaderProjectSection = {
	title: string
	type: 'header'
}

export type ProjectWebsite = {
	href: string
	text: string
}

export type Project = {
	backgroundImage: string
	handle: string
	longSubtitle?: string
	longTitle?: string
	sections?: (ContainerProjectSection | HeaderProjectSection)[]
	shortSubtitle?: string
	shortTitle: string
	website?: ProjectWebsite
}
