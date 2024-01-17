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

type BaseSection = {
	background: 'light' | 'dark'
}

export type ContentBlock = TextBlock | ListBlock

type ContentBlocks = ContentBlock[]

export interface TwoColumnProjectSection extends BaseSection {
	content: {
		col1: ContentBlocks
		col2: ContentBlocks
	}
	type: '2-column'
}

export interface ContainerProjectSection extends BaseSection {
	content: ContentBlocks
	type: 'container'
}

export type ImageCompare = {
	image1: string
	image2: string
	imageWidth: number
	imageHeight: number
}

export interface ImageCompareProjectSection extends BaseSection {
	content: {
		mobile: ImageCompare
		desktop: ImageCompare
	}
	type: 'image-compare'
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
	coverImage: {
		alt?: string
		src: string
		width: number
		height: number
	}
	description: string
	handle: string
	sections: (ContainerProjectSection | HeaderProjectSection | TwoColumnProjectSection | ImageCompareProjectSection)[]
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
