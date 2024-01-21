import Link from 'next/link'
import { Project } from '@/utils/types'
import BackArrowIcon from '@/lib/BackArrowIcon'
import ForwardArrowIcon from '@/lib/ForwardArrowIcon'
import { PROJECTS_URL } from '@/utils/constants'
import ProjectHoverImage from './ProjectHoverImage'

export type ProjectNavigationProps = {
	previousProject: Project
	nextProject: Project
}

export default function ProjectNavigation({ previousProject, nextProject }: ProjectNavigationProps) {
	const spanClasses =
		'transition-all group-hover:bg-orange dark:group-hover:bg-yellow box-decoration-clone py-1 px-3 group-hover:shadow-md'

	return (
		<section className="grid grid-cols-2 h-[25vh]">
			<Link
				className="group overflow-hidden relative w-full flex items-center justify-between md:justify-end text-right"
				href={`${PROJECTS_URL}/${previousProject.handle}`}
			>
				<ProjectHoverImage sizes="50vw" src={previousProject.backgroundImage} />
				<div className="relative ml-2 mr-4">
					<BackArrowIcon className="w-4 md:w-6" />
				</div>
				<div className="relative mr-4 md:mr-8 lg:mr-12">
					<p className="text-xs md:text-sm opacity-70 mb-1">PREVIOUS PROJECT:</p>
					<div>
						<h4 className="text-indigo/80 dark:text-indigo-100/80 group-hover:text-indigo dark:group-hover:text-indigo text-xl sm:text-3xl md:text-5xl font-medium">
							<span className={spanClasses + ' -mr-3 text-right leading-[1.3]'}>
								{previousProject.title.short.text}
							</span>
						</h4>
						<p className="text-indigo/80 dark:text-indigo-100/80 group-hover:text-indigo dark:group-hover:text-indigo text-right">
							<span className={spanClasses + ' -mr-3 text-right'}>
								{previousProject.title.short.subtitle}
							</span>
						</p>
					</div>
				</div>
			</Link>
			<Link
				className="group overflow-hidden relative w-full flex items-center justify-between md:justify-start"
				href={`${PROJECTS_URL}/${nextProject.handle}`}
			>
				<ProjectHoverImage sizes="50vw" src={nextProject.backgroundImage} />
				<div className="relative ml-4 md:ml-8 lg:ml-12">
					<p className="text-xs md:text-sm opacity-70 mb-1">NEXT PROJECT:</p>
					<div>
						<h4 className="text-indigo/80 dark:text-indigo-100/80 group-hover:text-indigo dark:group-hover:text-indigo text-xl sm:text-3xl md:text-5xl font-medium">
							<span className={spanClasses + ' -ml-3 leading-[1.3]'}>{nextProject.title.short.text}</span>
						</h4>
						<p className="text-indigo/80 dark:text-indigo-100/80 group-hover:text-indigo dark:group-hover:text-indigo">
							<span className={spanClasses + ' -ml-3 '}>{nextProject.title.short.subtitle}</span>
						</p>
					</div>
				</div>
				<div className="relative mr-2 ml-4">
					<ForwardArrowIcon className="w-4 md:w-6" />
				</div>
			</Link>
		</section>
	)
}
