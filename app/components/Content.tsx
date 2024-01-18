import Link from 'next/link'
import { ContentBlock } from '@/utils/types'
import Markdown from './Markdown'
import ThemeImage from '@/lib/ThemeImage'
import ContentTitle from './ContentTitle'

export type ContentProps = {
	contentBlock: ContentBlock
}

export default function Content({ contentBlock }: ContentProps) {
	return (
		<div key={contentBlock.title} className="mb-6 md:mb-12">
			{contentBlock.type === 'image-list' ? (
				<>
					<ContentTitle center>{contentBlock.title}</ContentTitle>
					<div className={`flex flex-wrap gap-10 justify-center`}>
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

			{contentBlock.type === 'text' ? (
				<>
					<ContentTitle>{contentBlock.title}</ContentTitle>
					{contentBlock.content.map((p) => (
						<Markdown key={p} text={p} />
					))}
				</>
			) : null}

			{contentBlock.type === 'list' ? (
				<>
					<ContentTitle>{contentBlock.title}</ContentTitle>
					<ul className="mb-4">
						{contentBlock.content.map((li) => (
							<li key={li} className="mb-3">
								<Markdown key={li} text={li} />
							</li>
						))}
					</ul>
				</>
			) : null}
		</div>
	)
}
