import { Block, ContentBlock } from '@/utils/types'
import Markdown from './Markdown'
import ThemeImage from '@/lib/ThemeImage'
import ContentTitle from './ContentTitle'
import List from '@/lib/List'
import ImageComparison from './ImageComparison'
import ScrollAnimation from './ScrollAnimation'
import Link from '@/lib/Link'

export type ContentProps = {
	block: ContentBlock
}

export default function Content({ block }: ContentProps) {
	if (block.type === Block.TWO_COLUMN)
		return (
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
		)

	return (
		<div className="mb-6 md:mb-12">
			{block.title ? (
				<ContentTitle center={block.type === Block.IMAGE_BLOCKS || block.type === Block.IMAGE_COMPARE}>
					{block.title}
				</ContentTitle>
			) : null}
			<ScrollAnimation classNameInView="transition-all translate-y-0 duration-700">
				{block.type === Block.IMAGE_BLOCKS ? (
					<div className={`flex flex-wrap gap-4 md:gap-10 justify-center`}>
						{block.content.map(({ href, image, text, title }, i) => {
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
								<ScrollAnimation
									key={text}
									classNameInView={`transition-all translate-y-0 duration-700 delay-[${i * 200}ms]`}
								>
									<div className="flex flex-col items-center w-80">
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
								</ScrollAnimation>
							)
						})}
					</div>
				) : null}

				{block.type === Block.TEXT ? block.content.map((p) => <Markdown key={p} text={p} />) : null}

				{block.type === Block.UNORDERED_LIST ? <List>{block.content}</List> : null}

				{block.type === Block.ORDERED_LIST ? <List ordered>{block.content}</List> : null}

				{block.type === Block.TEXT_IMAGE
					? block.content.map((c, i) => (
							<ScrollAnimation
								key={i}
								classNameInView={`transition-all translate-y-0 duration-700 delay-[${i * 200}ms]`}
							>
								<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-10 mb-12 md:mb-16">
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
							</ScrollAnimation>
					  ))
					: null}

				{block.type === Block.IMAGE_COMPARE ? <ImageComparison block={block} /> : null}
			</ScrollAnimation>
		</div>
	)
}
