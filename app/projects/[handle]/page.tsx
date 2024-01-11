import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PROJECTS, Project } from '@/utils/projects'

export default function ProjectPage({ params }: { params: { handle: string } }) {
	const project: Project | undefined = PROJECTS.find(({ handle }) => handle === params.handle)

	if (!project) notFound()

	return (
		<section className="relative w-full h-[66vh] overflow-hidden">
			<Image
				alt=""
				src={`/${project.backgroundImage}`}
				className="filter blur-sm object-cover h-full"
				fill
				priority
				sizes="100vw"
			/>
			<div className="absolute w-full h-full bg-green-200 dark:bg-green-900 mix-blend-hard-light" />
			<div className="relative container w-full h-full z-40 grid grid-cols-2">
				<div className="h-full flex flex-col gap-4 justify-center">
					<h1 className="text-5xl font-medium">{project.longTitle}</h1>
					<h2 className="text-xl">{project.subTitle}</h2>
				</div>
			</div>
		</section>
	)
}
