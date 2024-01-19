export enum Block {
	TEXT = 'text',
	UNORDERED_LIST = 'unordered-list',
	ORDERED_LIST = 'ordered-list',
	IMAGE_BLOCKS = 'image-blocks',
	TEXT_IMAGE = 'text-image',
	TWO_COLUMN = 'two-column',
}

type BaseBlock = {
	title: string
}

interface BaseListBlock extends BaseBlock {
	content: string[]
}

export interface TextBlock extends BaseListBlock {
	type: Block.TEXT
}

export interface UnorderedListBlock extends BaseListBlock {
	type: Block.UNORDERED_LIST
}

export interface OrderedListBlock extends BaseListBlock {
	type: Block.ORDERED_LIST
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
	type: Block.IMAGE_BLOCKS
}

export interface TextImageBlock extends BaseBlock {
	content: {
		text: string[]
		image: ThemeImageData
	}[]
	type: Block.TEXT_IMAGE
}

export type TwoColumnBlock = {
	content: {
		col1: ContentBlocks
		col2: ContentBlocks
	}
	type: Block.TWO_COLUMN
}

export type ContentBlock =
	| TextBlock
	| UnorderedListBlock
	| OrderedListBlock
	| ImageListBlock
	| TextImageBlock
	| TwoColumnBlock

type ContentBlocks = ContentBlock[]

type BaseSection = {
	background: 'light' | 'dark'
}

export interface ContainerSectionData extends BaseSection {
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
	sections: (ContainerSectionData | HeaderSection | TwoColumnBlock | ImageCompareSection)[]
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
