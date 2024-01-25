import Link from 'next/link'
import { Block, ContentBlock } from '@/utils/types'
import Markdown from './Markdown'
import ThemeImage from '@/lib/ThemeImage'
import ContentTitle from './ContentTitle'
import List from '@/lib/List'
import ImageComparison from './ImageComparison'

export type ContentProps = {
	block: ContentBlock
}

export default function Content({ block }: ContentProps) {
	return (
		<div className="mb-6 md:mb-12">
			{block.type === Block.IMAGE_BLOCKS ? (
				<>
					<ContentTitle center>{block.title}</ContentTitle>
					<div className={`flex flex-wrap gap-4 md:gap-10 justify-center`}>
						{block.content.map(({ href, image, text, title }) => {
							const ImageComponent = (
								<div className="aspect-square flex items-center justify-center">
									<ThemeImage
										alt={image.alt || ''}
										srcLight={image.src.light}
										srcDark={image.src?.dark}
										className="w-48 h-auto"
										width={image.width}
										height={image.height}
									/>
								</div>
							)

							return (
								<div key={text} className="flex flex-col items-center w-80">
									{href ? (
										<Link href={href} target="_blank">
											{ImageComponent}
										</Link>
									) : (
										ImageComponent
									)}
									<h4 className="text-lg md:text-xl font-medium mb-2">{title}</h4>
									<Markdown className="text-center" text={text} />
								</div>
							)
						})}
					</div>
				</>
			) : null}

			{block.type === Block.TEXT ? (
				<>
					<ContentTitle>{block.title}</ContentTitle>
					{block.content.map((p) => (
						<Markdown key={p} text={p} />
					))}
				</>
			) : null}

			{block.type === Block.UNORDERED_LIST ? (
				<>
					<ContentTitle>{block.title}</ContentTitle>
					<List>{block.content}</List>
				</>
			) : null}

			{block.type === Block.ORDERED_LIST ? (
				<>
					<ContentTitle>{block.title}</ContentTitle>
					<List ordered>{block.content}</List>
				</>
			) : null}

			{block.type === Block.TEXT_IMAGE ? (
				<>
					<ContentTitle>{block.title}</ContentTitle>
					{block.content.map((c, i) => (
						<div
							key={i}
							className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-10 mb-12 md:mb-16"
						>
							<div className="flex flex-col justify-center h-full order-2 md:order-none">
								{c.text.map((p) => (
									<Markdown key={p} text={p} />
								))}
							</div>
							<div className="lg:col-span-2 xl:col-span-3 order-1 md:order-none">
								<ThemeImage
									alt={c.image.alt || ''}
									srcLight={c.image.src.light}
									srcDark={c.image.src?.dark}
									className="w-full h-auto"
									width={c.image.width}
									height={c.image.height}
								/>
							</div>
						</div>
					))}
				</>
			) : null}

			{block.type === Block.TWO_COLUMN ? (
				<div className="grid md:grid-cols-2 gap-2 md:gap-10">
					<div>
						{block.content.col1.map((col1Content, i) => (
							<Content key={i} block={col1Content} />
						))}
					</div>
					<div>
						{block.content.col2.map((col2Content, j) => (
							<Content key={j} block={col2Content} />
						))}
					</div>
				</div>
			) : null}

			{block.type === Block.IMAGE_COMPARE ? <ImageComparison block={block} /> : null}
		</div>
	)
}
