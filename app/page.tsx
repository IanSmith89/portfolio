import Image from 'next/image'
import Button from './components/Button'
import tpcLogo from '../public/tpc.png'
import starbucksLogo from '../public/starbucks.png'
import microsoftLogo from '../public/microsoft.png'
import boeingLogo from '../public/boeing.png'
import highSeasLogo from '../public/high-seas.png'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<section className="transition-colors w-full bg-teal dark:bg-indigo">
				<div className="container h-[80vh] md:h-[50vh] lg:h-[55vh] xl:h-[75vh] 2xl:h-[85vh] flex flex-col md:flex-row gap-4 lg:gap-8 pt-8">
					<div className="relative w-full md:w-2/3 h-[100vw] md:h-full lg:h-full">
						<Image
							alt=""
							src="/collage-light.png"
							className="object-cover md:object-contain object-top"
							fill
							blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
							placeholder="blur"
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
						{/* <div className="flex gap-2 flex-wrap">
							<Button>VIEW MY WORK</Button>
							<Button variant="outline">GET TO KNOW ME</Button>
						</div> */}
					</div>
				</div>
			</section>
			{/* <section className="transition-colors w-full min-h-[66vh] bg-white dark:bg-grey-blue py-6 md:py-12">
				<div className="container">
					<h2 className="text-4xl md:text-6xl font-bold">Case Studies</h2>
				</div>
			</section>
			<section className="transition-colors w-full min-h-[66vh] bg-teal dark:bg-indigo py-6 md:py-12">
				<div className="container">
					<h2 className="text-4xl md:text-6xl font-bold">About Me</h2>
				</div>
			</section> */}
			<section
				id="resume-section"
				className="transition-colors w-full h-auto bg-white dark:bg-grey-blue py-12 md:py-32"
			>
				<div className="container h-full flex flex-col gap-16 items-center justify-center">
					<h2 className="text-xl md:text-2xl font-bold text-center mx-auto max-w-lg">
						I&apos;m grateful to have worked alongside amazing people at industry-leading, world-changing
						companies:
					</h2>
					<div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
						<Link href="https://www.theproscloset.com" target="_blank">
							<Image alt="" src={tpcLogo} loading="lazy" />
						</Link>
						<Link href="https://www.starbucks.com" target="_blank">
							<Image alt="" src={starbucksLogo} loading="lazy" />
						</Link>
						<Link href="https://www.microsoft.com" target="_blank">
							<Image alt="" src={microsoftLogo} loading="lazy" />
						</Link>
						<Link href="https://www.boeing.com" target="_blank">
							<Image alt="" src={boeingLogo} loading="lazy" />
						</Link>
						<Link href="https://highseas.com" target="_blank">
							<Image alt="" src={highSeasLogo} loading="lazy" />
						</Link>
					</div>
					<Button
						href="https://drive.google.com/file/d/1LKmlhusey6vC3NRcg_3iTnJ5NARl46lv/view"
						target="_blank"
					>
						VIEW MY FULL RÉSUMÉ
					</Button>
				</div>
			</section>
		</>
	)
}
