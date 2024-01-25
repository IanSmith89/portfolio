export enum Block {
	IMAGE_BLOCKS = 'image-blocks',
	IMAGE_COMPARE = 'image-compare',
	ORDERED_LIST = 'ordered-list',
	TEXT = 'text',
	TEXT_IMAGE = 'text-image',
	TWO_COLUMN = 'two-column',
	UNORDERED_LIST = 'unordered-list',
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
	title?: string
	content: {
		col1: ContentBlocks
		col2: ContentBlocks
	}
	type: Block.TWO_COLUMN
}

export type ImageCompare = {
	image1: string
	image2: string
	imageWidth: number
	imageHeight: number
}

export interface ImageCompareBlock extends BaseBlock {
	content: {
		mobile: ImageCompare
		desktop: ImageCompare
	}
	type: Block.IMAGE_COMPARE
}

export type ContentBlock =
	| TextBlock
	| UnorderedListBlock
	| OrderedListBlock
	| ImageListBlock
	| TextImageBlock
	| TwoColumnBlock
	| ImageCompareBlock

type ContentBlocks = ContentBlock[]

type BaseSection = {
	background: 'light' | 'dark'
}

export enum Section {
	CONTAINER = 'container',
	HEADER = 'header',
}

export interface ContainerSectionData extends BaseSection {
	center?: boolean
	blocks: ContentBlocks
	type: Section.CONTAINER
}

export type HeaderSection = {
	title: string
	type: Section.HEADER
}

export type ProjectWebsite = {
	href: string
	text: string
}

export type Project = {
	backgroundImage: string
	coverImage: {
		alt?: string
		src: string
		width: number
		height: number
	}
	description: string
	handle: string
	sections: (ContainerSectionData | HeaderSection)[]
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
