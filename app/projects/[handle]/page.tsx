import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PROJECTS, PROJECTS_URL, Project } from '@/utils/projects'
import Button from '@/lib/Button'
import BackArrowIcon from '@/lib/BackArrowIcon'
import ForwardArrowIcon from '@/lib/ForwardArrowIcon'

export default function ProjectPage({ params }: { params: { handle: string } }) {
	let nextProjectIndex: number = 0
	const project: Project | undefined = PROJECTS.find(({ handle }, i) => {
		if (handle === params.handle) {
			if (i + 1 !== PROJECTS.length) nextProjectIndex = i + 1
			return true
		}
	})

	if (!project) notFound()

	return (
		<section className="relative w-full h-[66vh] -mt-16">
			<Image
				alt=""
				src={`/${project.backgroundImage}`}
				className="object-cover h-full"
				fill
				priority
				sizes="100vw"
			/>
			<div className="absolute w-full h-full transition-colors bg-green-200 dark:bg-green-900 mix-blend-hard-light filter backdrop-blur-sm" />
			<div className="relative container w-full h-full flex flex-col">
				<div className="pt-20 flex justify-between">
					<Button href="/#featured-projects" size="small" variant="ghost" StartIcon={<BackArrowIcon />}>
						Back to All Projects
					</Button>
					<Button
						href={`${PROJECTS_URL}/${PROJECTS[nextProjectIndex].handle}`}
						size="small"
						variant="ghost"
						EndIcon={<ForwardArrowIcon />}
					>
						Next Project
					</Button>
				</div>
				<div className="grid md:grid-cols-2 gap-8 flex-grow">
					<div className="h-full flex flex-col justify-center gap-4">
						<h1 className="text-3xl md:text-5xl font-medium">{project.longTitle}</h1>
						<h2 className="md:text-xl">{project.longSubtitle}</h2>
					</div>
				</div>
			</div>
		</section>
	)
}
