import Image from 'next/image'
import Link from 'next/link'
import collage from '../public/collage-light.png'
import Button from './components/Button'
import { PROJECT_ROUTES } from './utils/constants'
import ResumeSection from './components/ResumeSection'
import ContactSection from './components/ContactSection'

export default function Home() {
	return (
		<>
			<section className="transition-colors w-full bg-teal dark:bg-indigo">
				<div className="container h-[80vh] md:h-[50vh] lg:h-[55vh] xl:h-[75vh] 2xl:h-[85vh] flex flex-col md:flex-row gap-4 lg:gap-8 pt-8">
					<div className="relative w-full md:w-2/3 h-[100vw] md:h-full lg:h-full">
						<Image
							alt=""
							src={collage}
							className="object-cover md:object-contain object-top"
							fill
							blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
							placeholder="blur"
							priority
							sizes="(max-width: 768px) 100vw, 66vw"
						/>
					</div>
					<div className="w-full md:w-4/12 flex flex-col gap-8 lg:gap-12 justify-center pb-12">
						<h1 className="transition-colors font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-indigo dark:text-white">
							<span className="block font-normal text-sm sm:text-base md:text-xl xl:text-2xl 2xl:text-3xl mb-4 xl:mb-6 opacity-65">
								Hi I&apos;m Ian,
							</span>
							I like to create <span className="font-light">interactive</span> things{' '}
							<span className="font-light">on the web</span>.
						</h1>
						<div className="flex gap-2 flex-wrap">
							<Button href="#recent-work">VIEW MY WORK</Button>
						</div>
					</div>
				</div>
			</section>
			{/* <section
				id="recent-work"
				className="transition-colors w-full min-h-[66vh] bg-white dark:bg-grey-blue pt-8 pb-12 md:pt-12 md:pb-20"
			>
				<div className="container">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6">Recent Work</h2>
					<div className="grid auto-rows-[240px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
						{PROJECT_ROUTES.map(({ href, title }, i) => {
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
								<Link key={title} href={href} className={className}>
									<div className="h-full rounded-2xl bg-black bg-opacity-10 flex items-center justify-center p-4">
										<h3 className="text-center opacity-20">COMING SOON</h3>
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</section>
			<section
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
