type BaseBlock = {
	content: string[]
	title: string
}

export interface TextBlock extends BaseBlock {
	type: 'text'
}

export interface ListBlock extends BaseBlock {
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
	bgColor: {
		light: string
		dark: string
	}
	handle: string
	longSubtitle?: string
	longTitle?: string
	sections?: (ContainerProjectSection | HeaderProjectSection)[]
	shortSubtitle?: string
	shortTitle: string
	website?: ProjectWebsite
}
