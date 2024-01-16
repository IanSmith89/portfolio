import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import projects from '@/data/projects.json'
import { Project } from '@/utils/types'
import Button from '@/lib/Button'
import BackArrowIcon from '@/lib/BackArrowIcon'
import ForwardArrowIcon from '@/lib/ForwardArrowIcon'
import { PROJECTS_URL } from '@/utils/constants'

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

	const { backgroundImage, bgColor, longTitle, longSubtitle, sections, website } = project
	const previousProject = projects[previousProjectIndex]
	const nextProject = projects[nextProjectIndex]

	return (
		<>
			<section className="relative w-full h-[75vh] md:h-[66vh] -mt-16">
				<Image alt="" src={`/${backgroundImage}`} className="object-cover h-full" fill priority sizes="100vw" />
				<div
					className={`absolute w-full h-full transition-colors filter backdrop-blur-sm mix-blend-hard-light ${bgColor.light} ${bgColor.dark}`}
				/>
				<div className="relative container w-full h-full flex flex-col">
					<Button
						className="relative top-20 -left-3 self-start"
						href="/#featured-projects"
						size="small"
						variant="ghost"
						StartIcon={<BackArrowIcon className="w-4" />}
					>
						Back to All Projects
					</Button>
					<div className="grid md:grid-cols-2 gap-8 flex-grow">
						<div className="h-full flex flex-col justify-center items-center md:items-start gap-4">
							<h1 className="text-3xl md:text-5xl font-medium">
								<span
									className={`${bgColor.light} ${bgColor.dark} box-decoration-clone py-1 px-3 leading-[1.33] shadow-lg`}
								>
									{longTitle}
								</span>
							</h1>
							<h2 className="text-indigo/70 dark:text-white/70 md:text-xl">{longSubtitle}</h2>
							{website ? (
								<Button className="mt-2" href={website.href} target="_blank" variant="outline">
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
			<section className="grid grid-cols-2 h-[25vh]">
				<Link
					className="group overflow-hidden relative w-full flex items-center justify-between md:justify-end text-right"
					href={`${PROJECTS_URL}/${previousProject.handle}`}
				>
					<Image
						alt=""
						src={`/${previousProject.backgroundImage}`}
						className="transition-transform object-cover h-full group-hover:scale-[1.03]"
						fill
						sizes="50vw"
					/>
					<div
						className={`absolute w-full h-full transition-all filter backdrop-blur-sm group-hover:backdrop-blur-0 mix-blend-hard-light ${previousProject.bgColor.light} ${previousProject.bgColor.dark}`}
					/>
					<div className="relative ml-2 mr-4">
						<BackArrowIcon className="w-4 md:w-6" />
					</div>
					<div className="relative mr-4 md:mr-8 lg:mr-12">
						<p className="text-xs md:text-sm opacity-70 mb-1">PREVIOUS PROJECT:</p>
						<div>
							<h4 className="text-xl sm:text-3xl md:text-5xl font-medium">
								<span
									className={`transition-all ${previousProject.bgColor.light} ${previousProject.bgColor.dark} box-decoration-clone py-1 px-3 group-hover:shadow-md leading-[1.3] text-right`}
								>
									{previousProject.shortTitle}
								</span>
							</h4>
							<p className="text-right">
								<span
									className={`transition-all ${previousProject.bgColor.light} ${previousProject.bgColor.dark} box-decoration-clone py-1 px-3 group-hover:shadow-md text-right`}
								>
									{previousProject.shortSubtitle}
								</span>
							</p>
						</div>
					</div>
				</Link>
				<Link
					className="group overflow-hidden relative w-full flex items-center justify-between md:justify-start"
					href={`${PROJECTS_URL}/${nextProject.handle}`}
				>
					<Image
						alt=""
						src={`/${nextProject.backgroundImage}`}
						className="transition-transform object-cover h-full group-hover:scale-[1.03]"
						fill
						sizes="50vw"
					/>
					<div
						className={`absolute w-full h-full transition-all filter backdrop-blur-sm group-hover:backdrop-blur-0 mix-blend-hard-light ${nextProject.bgColor.light} ${nextProject.bgColor.dark}`}
					/>
					<div className="relative ml-4 md:ml-8 lg:ml-12">
						<p className="text-xs md:text-sm opacity-70 mb-1">NEXT PROJECT:</p>
						<div>
							<h4 className="text-xl sm:text-3xl md:text-5xl font-medium">
								<span
									className={`transition-all ${nextProject.bgColor.light} ${nextProject.bgColor.dark} box-decoration-clone py-1 px-3 group-hover:shadow-md leading-[1.3]`}
								>
									{nextProject.shortTitle}
								</span>
							</h4>
							<p>
								<span
									className={`transition-all ${nextProject.bgColor.light} ${nextProject.bgColor.dark} box-decoration-clone py-1 px-3 group-hover:shadow-md`}
								>
									{nextProject.shortSubtitle}
								</span>
							</p>
						</div>
					</div>
					<div className="relative mr-2 ml-4">
						<ForwardArrowIcon className="w-4 md:w-6" />
					</div>
				</Link>
			</section>
		</>
	)
}
