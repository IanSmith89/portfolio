type BaseBlock = {
	title: string
}

interface BaseListBlock extends BaseBlock {
	content: string[]
}

export interface TextBlock extends BaseListBlock {
	type: 'text'
}

export interface UnorderedListBlock extends BaseListBlock {
	type: 'unordered-list'
}

export interface OrderedListBlock extends BaseListBlock {
	type: 'ordered-list'
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
	type: 'image-blocks'
}

type BaseSection = {
	background: 'light' | 'dark'
}

export type ContentBlock = TextBlock | UnorderedListBlock | OrderedListBlock | ImageListBlock

type ContentBlocks = ContentBlock[]

export interface TwoColumnSection extends BaseSection {
	content: {
		col1: ContentBlocks
		col2: ContentBlocks
	}
	type: '2-column'
}

export interface ContainerSection extends BaseSection {
	center?: boolean
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
