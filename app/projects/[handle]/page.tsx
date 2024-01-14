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
		<>
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
			<section className="bg-white dark:bg-grey-blue py-8">
				<div className="container">
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">Project Overview</h3>
						<p className="prose text-indigo dark:text-white">
							I had the privilege of leading the implementation of a significant redesign for the
							public-facing e-commerce website of TPC, the industry leader in buying and selling used
							bikes. The primary goal was to enhance the user experience, improve performance, and
							modernize the overall look and feel of the site.
						</p>
					</div>
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">Objectives</h3>
						<ul className="">
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Enhanced User Experience:</span> Improve navigation,
								product discovery, and overall satisfaction for online shoppers.
							</li>
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Performance Optimization:</span> Enhance website speed and
								responsiveness for a seamless user experience.
							</li>
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Modernization:</span> Redesign the user interface to align
								with contemporary design trends and the brand image.
							</li>
						</ul>
					</div>
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">My Role</h3>
						<p className="prose text-indigo dark:text-white">
							As the frontend engineering lead, my responsibilities encompassed overseeing the entire
							frontend development process, collaborating with our design and product teams, and ensuring
							the successful implementation of the redesigned website while continuing to release new
							features and product updates.
						</p>
					</div>
				</div>
			</section>
			<section className="py-8">
				<div className="container">
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">Challenges</h3>
						<ul className="">
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Outdated User Interface:</span> The existing website had
								an outdated design that didn&apos;t resonate with the company&apos;s progressive image.
							</li>
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Suboptimal User Journey:</span> Users faced difficulties
								navigating and finding products efficiently.
							</li>
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Performance Concerns:</span> Load times were inconsistent,
								impacting the overall user experience.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<h2 className="bg-teal-100 dark:bg-grey-blue font-light text-4xl md:text-5xl text-center py-16">
				SOLUTION
			</h2>
			<section className="bg-white dark:bg-grey-blue py-8">
				<div className="container">
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">Key Features</h3>
						<ul className="">
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Streamlined Navigation:</span> Implemented a simplified
								menu structure for easier navigation.
							</li>
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Enhanced Product Pages:</span> Improved layout and
								presentation of product information for a better user experience.
							</li>
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Responsive Design:</span> Ensured a seamless experience
								across various devices.
							</li>
						</ul>
					</div>
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">Technology Highlights</h3>
						<ul className="">
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">#1:</span> Foo
							</li>
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">#2:</span> Bar
							</li>
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">#3:</span> Baz
							</li>
						</ul>
					</div>
				</div>
			</section>
			<h2 className="bg-teal-100 dark:bg-grey-blue font-light text-4xl md:text-5xl text-center py-16">
				RESULTS &amp; IMPACT
			</h2>
			<section className="bg-white dark:bg-grey-blue py-8">
				<div className="container">
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">Metrics</h3>
						<ul className="">
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Page Load Time:</span> Reduced by 40%, contributing to a
								significant improvement in bounce rates.
							</li>
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Conversion Rate:</span> Increased by 25% within the first
								month post-launch.
							</li>
							<li className="prose text-indigo dark:text-white mb-2">
								<span className="font-medium">Mobile Traffic:</span> Saw a 20% increase, indicating
								improved mobile responsiveness.
							</li>
						</ul>
					</div>
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">Impact</h3>
						<p className="prose text-indigo dark:text-white">
							The redesign not only met but exceeded the project objectives, resulting in a more engaging
							and efficient e-commerce platform.
						</p>
					</div>
				</div>
			</section>
			<section className="py-8">
				<div className="container">
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">Reflection</h3>
						<p className="prose text-indigo dark:text-white">
							The successful implementation of this project reinforced the importance of collaboration
							between design and development teams. It highlighted the value of user feedback throughout
							the development process.
						</p>
					</div>
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">Lessons Learned</h3>
						<p className="prose text-indigo dark:text-white">
							Overcoming technical challenges related to performance optimization taught us the importance
							of balancing aesthetic improvements with maintaining a fast and efficient website.
						</p>
					</div>
					<div className="mb-6">
						<h3 className="font-medium text-2xl md:text-3xl mb-4">Future Recommendations</h3>
						<p className="prose text-indigo dark:text-white">
							For future projects, I recommend continuous user testing throughout development and
							increased focus on mobile-first design principles to adapt to evolving user preferences.
						</p>
					</div>
				</div>
			</section>
		</>
	)
}
