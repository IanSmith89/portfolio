import projects from '@/data/projects.json'
import ProjectTile from './ProjectTile'
import ScrollAnimation from './ScrollAnimation'

export default function WorkSection() {
	return (
		<section
			id="featured-projects"
			className="transition-colors w-full bg-white dark:bg-grey-blue pt-8 pb-12 md:pt-16 md:pb-24 scroll-mt-16"
		>
			<ScrollAnimation classNameInView="transition-all translate-y-0 duration-700">
				<div className="container">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6 md:mb-12">Featured Projects</h2>
					<div className="grid auto-rows-[240px] md:auto-rows-[320px] lg:auto-rows-[300px] xl:auto-rows-[240px] 2xl:auto-rows-[280px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
						{projects.map(({ backgroundImage, handle, title }, i) => (
							<ProjectTile
								key={i}
								backgroundImage={backgroundImage}
								handle={handle}
								index={i}
								title={title}
							/>
						))}
					</div>
				</div>
			</ScrollAnimation>
		</section>
	)
}
