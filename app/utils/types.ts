type BaseBlock = {
	title: string
}

export interface TextBlock extends BaseBlock {
	content: string[]
	type: 'text'
}

export interface ListBlock extends BaseBlock {
	content: string[]
	type: 'list'
}

export type ThemeImageData = {
	alt?: string
	src: {
		light: string
		dark?: string
	}
	width: number
	height: number
}

export interface ImageListBlock extends BaseBlock {
	content: {
		href?: string
		image: ThemeImageData
		title: string
		text: string
	}[]
	type: 'image-list'
}

type BaseSection = {
	background: 'light' | 'dark'
}

export type ContentBlock = TextBlock | ListBlock | ImageListBlock

type ContentBlocks = ContentBlock[]

export interface TwoColumnSection extends BaseSection {
	content: {
		col1: ContentBlocks
		col2: ContentBlocks
	}
	type: '2-column'
}

export interface ContainerSection extends BaseSection {
	content: ContentBlocks
	type: 'container'
}

export type ImageCompare = {
	image1: string
	image2: string
	imageWidth: number
	imageHeight: number
}

export interface ImageCompareSection extends BaseSection {
	content: {
		mobile: ImageCompare
		desktop: ImageCompare
	}
	type: 'image-compare'
}

export type HeaderSection = {
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
	coverImage: {
		alt?: string
		src: string
		width: number
		height: number
	}
	description: string
	handle: string
	sections: (ContainerSection | HeaderSection | TwoColumnSection | ImageCompareSection)[]
	title: {
		long: {
			text: string
			subtitle: string
		}
		short: {
			text: string
			subtitle: string
		}
	}
	website?: ProjectWebsite
}
