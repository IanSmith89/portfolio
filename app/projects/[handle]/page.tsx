import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import projects from '@/data/projects.json'
import { Project, Section } from '@/utils/types'
import Button from '@/lib/Button'
import BackArrowIcon from '@/lib/BackArrowIcon'
import ContainerSection from '@/components/ContainerSection'
import ProjectNavigation from '@/components/ProjectNavigation'
import { METADATA, ORIGIN, PROJECTS_URL, DEFAULT_TITLE } from '@/utils/constants'

type ProjectPageProps = {
	params: {
		handle: string
	}
}

export async function generateMetadata(
	{ params }: ProjectPageProps,
	parent: ResolvingMetadata
): Promise<Metadata | undefined> {
	const project = projects.find(({ handle }) => handle === params.handle)

	if (project) {
		const { description } = project
		const title = `${project.title.long.text}: ${project.title.long.subtitle}`
		const parentOpenGraph = (await parent).openGraph

		return {
			...METADATA,
			title,
			description,
			openGraph: {
				...METADATA.openGraph,
				url: `${ORIGIN}${PROJECTS_URL}/${project.handle}`,
				title: `${title} | ${DEFAULT_TITLE}`,
				description,
				images: [
					{
						url: project.coverImage.src,
						height: project.coverImage.height,
						width: project.coverImage.width,
					},
					...(parentOpenGraph?.images || []),
				],
			},
		}
	}
}

export default function ProjectPage({ params }: ProjectPageProps) {
	let previousProjectIndex: number = projects.length - 1
	let nextProjectIndex: number = 0
	const project = (projects as Project[]).find(({ handle }, i) => {
		const isProject = handle === params.handle
		if (isProject) {
			if (i - 1 > -1) previousProjectIndex = i - 1
			if (i + 1 !== projects.length) nextProjectIndex = i + 1
		}
		return isProject
	})

	if (!project) notFound()

	const { backgroundImage, coverImage, description, sections, title, website } = project
	const previousProject = projects[previousProjectIndex] as Project
	const nextProject = projects[nextProjectIndex] as Project

	return (
		<>
			<section className="relative w-full -mt-16">
				<Image alt="" src={backgroundImage} className="object-cover h-full" fill priority sizes="100vw" />
				<div className="absolute w-full h-full transition-colors filter backdrop-blur-sm mix-blend-hard-light bg-teal dark:bg-grey-blue/70" />
				<div className="relative container w-full h-full pt-20">
					<Button
						className="-ml-3"
						href="/#featured-projects"
						size="small"
						variant="ghost"
						StartIcon={<BackArrowIcon className="w-4" />}
					>
						Back to All Projects
					</Button>
					<div className="h-full pt-8 pb-16 md:py-16 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10">
						<div className="md:h-full md:w-1/2 flex items-center">
							<Image
								alt={coverImage.alt || ''}
								src={coverImage.src}
								className="w-full h-auto"
								priority
								width={coverImage.width}
								height={coverImage.height}
								placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
							/>
						</div>
						<div className="md:h-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4">
							<h1 className="text-3xl md:text-4xl xl:text-5xl font-medium">
								<span className="bg-orange dark:bg-yellow dark:text-indigo box-decoration-clone py-1 px-3 md:px-4 leading-[1.33] shadow-lg">
									{`${title.long.text}: `}
									<span className="font-light">{title.long.subtitle}</span>
								</span>
							</h1>
							<h2 className="text-indigo/80 dark:text-white/70 md:text-xl">{description}</h2>
							{website ? (
								<Button className="mt-2" href={website.href} target="_blank" variant="outline">
									{website.text}
								</Button>
							) : null}
						</div>
					</div>
				</div>
			</section>
			{sections.map((section, i) => {
				if (section.type === Section.CONTAINER) return <ContainerSection key={i} section={section} />

				if (section.type === Section.HEADER)
					return (
						<section
							key={i}
							className="bg-teal-100 dark:bg-grey-blue py-16 flex items-center justify-center"
						>
							<h2 className="font-light text-4xl md:text-5xl">{section.title}</h2>
						</section>
					)
			})}
			<ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
		</>
	)
}
