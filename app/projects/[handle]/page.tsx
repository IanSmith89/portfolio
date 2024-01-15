import Image from 'next/image'
import { notFound } from 'next/navigation'
import projects from '@/data/projects.json'
import { Project } from '@/utils/types'
import Button from '@/lib/Button'
import BackArrowIcon from '@/lib/BackArrowIcon'
import ForwardArrowIcon from '@/lib/ForwardArrowIcon'
import { PROJECTS_URL } from '@/utils/constants'
import Link from 'next/link'

export default function ProjectPage({ params }: { params: { handle: string } }) {
	let previousProjectIndex: number = projects.length - 1
	let nextProjectIndex: number = 0
	const project: Project | undefined = (projects as Project[]).find(({ handle }, i) => {
		if (handle === params.handle) {
			if (i - 1 > -1) previousProjectIndex = i - 1
			if (i + 1 !== projects.length) nextProjectIndex = i + 1
			return true
		}
	})

	if (!project) notFound()

	const { backgroundImage, longTitle, longSubtitle, sections, website } = project
	const previousProject = projects[previousProjectIndex]
	const nextProject = projects[nextProjectIndex]

	return (
		<>
			<section className="relative w-full h-[66vh] -mt-16">
				<Image alt="" src={`/${backgroundImage}`} className="object-cover h-full" fill priority sizes="100vw" />
				<div className="absolute w-full h-full transition-colors bg-green-200 dark:bg-green-900 mix-blend-hard-light filter backdrop-blur-sm" />
				<div className="relative container w-full h-full flex flex-col">
					<div className="pt-20 flex justify-between">
						<Button href="/#featured-projects" size="small" variant="ghost" StartIcon={<BackArrowIcon />}>
							Back to All Projects
						</Button>
						<Button
							href={`${PROJECTS_URL}/${nextProject.handle}`}
							size="small"
							variant="ghost"
							EndIcon={<ForwardArrowIcon />}
						>
							Next Project
						</Button>
					</div>
					<div className="grid md:grid-cols-2 gap-8 flex-grow">
						<div className="h-full flex flex-col justify-center items-center md:items-start gap-4">
							<h1 className="text-3xl md:text-5xl font-medium">{longTitle}</h1>
							<h2 className="md:text-xl">{longSubtitle}</h2>
							{website ? (
								<Button href={website.href} target="_blank" variant="outline">
									{website.text}
								</Button>
							) : null}
						</div>
					</div>
				</div>
			</section>
			{sections?.map((section, i) => {
				if (section.type === 'container')
					return (
						<section
							key={i}
							className={`py-8 ${section.background === 'light' ? 'bg-white dark:bg-grey-blue/50' : ''}`}
						>
							<div className="container">
								{section.content.map((contentBlock) => {
									return (
										<div key={contentBlock.title} className="mb-6">
											<h3 className="font-medium text-2xl md:text-3xl mb-4">
												{contentBlock.title}
											</h3>
											{contentBlock.type === 'text'
												? contentBlock.content.map((p) => (
														<p key={p} className="prose text-indigo dark:text-white">
															{p}
														</p>
												  ))
												: null}
											{contentBlock.type === 'list' ? (
												<ul>
													{contentBlock.content.map((li) => (
														<li
															key={li.title}
															className="prose text-indigo dark:text-white mb-2"
														>
															<span className="font-medium">{li.title}:</span> {li.detail}
														</li>
													))}
												</ul>
											) : null}
										</div>
									)
								})}
							</div>
						</section>
					)

				if (section.type === 'header')
					return (
						<section
							key={i}
							className="bg-teal-100 dark:bg-grey-blue py-16 flex items-center justify-center"
						>
							<h2 className="font-light text-4xl md:text-5xl">{section.title}</h2>
						</section>
					)
			})}
			<section className="bg-white dark:bg-grey-blue/50 py-8">
				<div className="container grid grid-cols-2">
					<Link
						className="flex flex-col items-start gap-4"
						href={`${PROJECTS_URL}/${previousProject.handle}`}
					>
						<Button size="small" variant="ghost" StartIcon={<BackArrowIcon />}>
							Previous Project
						</Button>
						<Image alt="" src={`/${previousProject.backgroundImage}`} width={160} height={90} />
						<div>
							<h4 className="font-medium text-xl hover:underline">{previousProject.shortTitle}</h4>
							<p>{previousProject.shortSubtitle}</p>
						</div>
					</Link>
					<Link className="flex flex-col items-end gap-4" href={`${PROJECTS_URL}/${nextProject.handle}`}>
						<Button size="small" variant="ghost" EndIcon={<ForwardArrowIcon />}>
							Next Project
						</Button>
						<Image alt="" src={`/${nextProject.backgroundImage}`} width={160} height={90} />
						<div className="text-right">
							<h4 className="font-medium text-xl hover:underline">{nextProject.shortTitle}</h4>
							<p>{nextProject.shortSubtitle}</p>
						</div>
					</Link>
				</div>
			</section>
		</>
	)
}
