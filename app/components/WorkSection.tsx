import projects from '@/data/projects.json'
import ProjectTile from './ProjectTile'

export default function WorkSection() {
	return (
		<section
			id="featured-projects"
			className="transition-colors w-full bg-white dark:bg-grey-blue pt-8 pb-12 md:pt-16 md:pb-24 scroll-mt-16"
		>
			<div className="container">
				<h2 className="text-4xl lg:text-5xl font-bold mb-6 md:mb-12">Featured Projects</h2>
				<div className="grid auto-rows-[280px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
		</section>
	)
}
