import Link from 'next/link'
import { PROJECTS_URL } from '@/utils/constants'
import { Project } from '@/utils/types'
import ProjectHoverImage from './ProjectHoverImage'

export type ProjectTileProps = {
	backgroundImage: Project['backgroundImage']
	handle: Project['handle']
	index: number
	title: Project['title']
}

export default function ProjectTile({ backgroundImage, handle, index, title }: ProjectTileProps) {
	const spanClasses =
		'group-hover:bg-orange dark:group-hover:bg-yellow box-decoration-clone py-1 group-hover:shadow-md'
	let linkClasses = 'relative rounded-2xl overflow-hidden group'

	if (index === 0) linkClasses += ' md:row-span-2'
	if (index === 1) linkClasses += ' lg:col-span-2 xl:col-auto'
	if (index === 2) linkClasses += ' md:row-span-2 lg:row-auto'
	if (index === 3) linkClasses += ' xl:col-span-2'
	if (index === 4) linkClasses += ' md:row-span-2 lg:row-auto lg:col-span-2'
	if (index === 5) linkClasses += ' lg:row-span-2 xl:row-auto'
	if (index === 6) linkClasses += ' md:row-span-2 lg:row-auto xl:row-span-2'
	if (index === 9) linkClasses += ' lg:col-span-2'

	return (
		<Link key={handle} href={`${PROJECTS_URL}/${handle}`} className={linkClasses}>
			<ProjectHoverImage
				sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
				src={backgroundImage}
			/>
			<div className="absolute w-full h-full flex flex-col items-center justify-center p-6">
				<h3 className="font-medium text-3xl text-center text-indigo/80 dark:text-indigo-100/80 group-hover:text-indigo dark:group-hover:text-indigo">
					<span className={spanClasses + ' px-3 leading-[1.33]'}>{title.short.text}</span>
				</h3>
				<h4 className="text-center text-indigo/80 dark:text-indigo-100/80 group-hover:text-indigo dark:group-hover:text-indigo">
					<span className={spanClasses + ' px-2'}>{title.short.subtitle}</span>
				</h4>
			</div>
		</Link>
	)
}
