import Link from 'next/link'
import { Block, ContentBlock } from '@/utils/types'
import Markdown from './Markdown'
import ThemeImage from '@/lib/ThemeImage'
import ContentTitle from './ContentTitle'
import List from '@/lib/List'

export type ContentProps = {
	contentBlock: ContentBlock
}

export default function Content({ contentBlock }: ContentProps) {
	return (
		<div className="mb-6 md:mb-12">
			{contentBlock.type === Block.IMAGE_BLOCKS ? (
				<>
					<ContentTitle center>{contentBlock.title}</ContentTitle>
					<div className={`flex flex-wrap gap-4 md:gap-10 justify-center`}>
						{contentBlock.content.map(({ href, image, text, title }) => {
							const ImageComponent = (
								<div className="aspect-[4/3] flex items-center justify-center">
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
									<p className="text-indigo/90 dark:text-indigo-100 text-center">{text}</p>
								</div>
							)
						})}
					</div>
				</>
			) : null}

			{contentBlock.type === Block.TEXT ? (
				<>
					<ContentTitle>{contentBlock.title}</ContentTitle>
					{contentBlock.content.map((p) => (
						<Markdown key={p} text={p} />
					))}
				</>
			) : null}

			{contentBlock.type === Block.UNORDERED_LIST ? (
				<>
					<ContentTitle>{contentBlock.title}</ContentTitle>
					<List>{contentBlock.content}</List>
				</>
			) : null}

			{contentBlock.type === Block.ORDERED_LIST ? (
				<>
					<ContentTitle>{contentBlock.title}</ContentTitle>
					<List ordered>{contentBlock.content}</List>
				</>
			) : null}

			{contentBlock.type === Block.TEXT_IMAGE ? (
				<>
					<ContentTitle>{contentBlock.title}</ContentTitle>
					{contentBlock.content.map((c, i) => (
						<div key={i} className="grid md:grid-cols-3 gap-4 lg:gap-10 mb-12 md:mb-16">
							<div className="flex flex-col justify-center h-full">
								{c.text.map((p) => (
									<Markdown key={p} text={p} />
								))}
							</div>
							<div className="md:col-span-2">
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

			{contentBlock.type === Block.TWO_COLUMN ? (
				<div className="grid md:grid-cols-2 md:gap-10">
					<div>
						{contentBlock.content.col1.map((col1Content, i) => (
							<Content key={i} contentBlock={col1Content} />
						))}
					</div>
					<div>
						{contentBlock.content.col2.map((col2Content, j) => (
							<Content key={j} contentBlock={col2Content} />
						))}
					</div>
				</div>
			) : null}
		</div>
	)
}
