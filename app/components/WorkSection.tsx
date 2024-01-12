import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS, PROJECTS_URL } from '@/utils/projects'

export default function WorkSection() {
	return (
		<section
			id="featured-projects"
			className="transition-colors w-full min-h-[66vh] bg-white dark:bg-grey-blue pt-8 pb-12 md:pt-16 md:pb-24 scroll-mt-16"
		>
			<div className="container">
				<h2 className="text-4xl lg:text-5xl font-bold mb-6 md:mb-12">Featured Projects</h2>
				<div className="grid auto-rows-[240px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
					{PROJECTS.map(({ backgroundImage, handle, shortTitle, shortSubtitle }, i) => {
						let className = 'relative rounded-2xl overflow-hidden'

						if (i === 0) className += ' md:row-span-2'
						if (i === 1) className += ' lg:col-span-2 xl:col-auto'
						if (i === 2) className += ' md:row-span-2 lg:row-auto'
						if (i === 3) className += ' xl:col-span-2'
						if (i === 4) className += ' md:row-span-2 lg:row-auto lg:col-span-2'
						if (i === 5) className += ' lg:row-span-2 xl:row-auto'
						if (i === 6) className += ' md:row-span-2 lg:row-auto xl:row-span-2'
						if (i === 9) className += ' lg:col-span-2'

						return (
							<Link key={handle} href={`${PROJECTS_URL}/${handle}`} className={className}>
								<Image
									alt=""
									src={`/${backgroundImage}`}
									className="object-cover h-full"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
								/>
								<div className="absolute w-full h-full filter backdrop-blur-sm transition-colors bg-green-200 dark:bg-green-900 mix-blend-hard-light" />
								<div className="absolute w-full h-full flex flex-col items-center justify-center p-6">
									<h3 className="font-medium text-3xl text-center">{shortTitle}</h3>
									<h4 className="font-light text-center">{shortSubtitle}</h4>
								</div>
							</Link>
						)
					})}
				</div>
			</div>
		</section>
	)
}
