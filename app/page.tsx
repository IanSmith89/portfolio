import Link from 'next/link'
import { PROJECTS, PROJECTS_URL } from '@/utils/projects'
import ResumeSection from '@/components/ResumeSection'
import ContactSection from '@/components/ContactSection'
import LandingSection from '@/components/LandingSection'

export default function HomePage() {
	return (
		<>
			<LandingSection />
			<section
				id="recent-work"
				className="transition-colors w-full min-h-[66vh] bg-white dark:bg-grey-blue pt-8 pb-12 md:pt-12 md:pb-20"
			>
				<div className="container">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6">Recent Work</h2>
					<div className="grid auto-rows-[240px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
						{PROJECTS.map(({ handle, shortTitle }, i) => {
							let className = ''

							if (i === 0) className = 'md:row-span-2'
							if (i === 1) className = 'lg:col-span-2 xl:col-auto'
							if (i === 2) className = 'md:row-span-2 lg:row-auto'
							if (i === 3) className = 'xl:col-span-2'
							if (i === 4) className = 'md:row-span-2 lg:row-auto lg:col-span-2'
							if (i === 5) className = 'lg:row-span-2'
							if (i === 6) className = 'md:row-span-2 xl:row-auto'
							if (i === 8) className = 'md:row-span-2 lg:row-auto'
							if (i === 9) className = 'lg:row-span-2 xl:row-auto'
							if (i === 10) className = 'lg:col-span-2 xl:col-auto'

							return (
								<Link key={handle} href={`${PROJECTS_URL}/${handle}`} className={className}>
									<div className="h-full rounded-2xl bg-black bg-opacity-10 flex items-center justify-center p-4">
										<h3 className="text-center opacity-20">{shortTitle}</h3>
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</section>
			{/* <section
				id="about-me"
				className="transition-colors w-full min-h-[66vh] bg-teal dark:bg-indigo py-6 md:py-12"
			>
				<div className="container">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Me</h2>
				</div>
			</section> */}
			<ResumeSection />
			<ContactSection />
		</>
	)
}
