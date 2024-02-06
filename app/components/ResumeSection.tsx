import Link from '@/lib/Link'
import ThemeImage from '@/lib/ThemeImage'
import tpcLight from '@public/tpc_light.png'
import tpcDark from '@public/tpc_dark.png'
import starbucksLight from '@public/starbucks_light.png'
import starbucksDark from '@public/starbucks_dark.png'
import microsoftLight from '@public/microsoft_light.png'
import microsoftDark from '@public/microsoft_dark.png'
import boeingLight from '@public/boeing_light.png'
import boeingDark from '@public/boeing_dark.png'
import highSeasLight from '@public/high-seas_light.png'
import highSeasDark from '@public/high-seas_dark.png'
import Button from '@/lib/Button'
import ScrollAnimation from './ScrollAnimation'

const links = [
	{
		href: 'https://www.theproscloset.com',
		image: {
			alt: 'TPC logo',
			src: {
				light: tpcLight,
				dark: tpcDark,
			},
		},
	},
	{
		href: 'https://www.starbucks.com',
		image: {
			alt: 'Starbucks logo',
			src: {
				light: starbucksLight,
				dark: starbucksDark,
			},
		},
	},
	{
		href: 'https://www.microsoft.com',
		image: {
			alt: 'Microsoft logo',
			src: {
				light: microsoftLight,
				dark: microsoftDark,
			},
		},
	},
	{
		href: 'https://www.boeing.com',
		image: {
			alt: 'Boeing logo',
			src: {
				light: boeingLight,
				dark: boeingDark,
			},
		},
	},
	{
		href: 'https://highseas.com',
		image: {
			alt: 'High Seas Logo',
			src: {
				light: highSeasLight,
				dark: highSeasDark,
			},
		},
	},
]

export default function ResumeSection() {
	return (
		<section
			id="resume"
			className="transition-colors w-full h-auto bg-white dark:bg-grey-blue py-16 md:py-32 scroll-mt-16"
		>
			<ScrollAnimation classNameInView="transition-all translate-y-0 duration-700">
				<div className="container w-full h-full flex flex-col gap-16 items-center justify-center">
					<h2 className="text-xl md:text-2xl font-medium text-center mx-auto max-w-lg">
						I&apos;m grateful to have worked alongside amazing people at industry-leading, world-changing
						companies:
					</h2>
					<div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
						{links.map((link, i) => (
							<ScrollAnimation
								key={link.href}
								classNameInView={`transition-all translate-y-0 duration-700 delay-[${i * 200}ms]`}
							>
								<Link href={link.href} target="_blank">
									<ThemeImage
										alt={link.image.alt}
										srcLight={link.image.src.light}
										srcDark={link.image.src.dark}
										className="w-48 h-auto"
									/>
								</Link>
							</ScrollAnimation>
						))}
					</div>
					<ScrollAnimation classNameInView="transition-all translate-y-0 duration-700 delay-1000">
						<Button
							href="https://drive.google.com/file/d/1LKmlhusey6vC3NRcg_3iTnJ5NARl46lv/view"
							size="large"
							target="_blank"
						>
							View My Résumé
						</Button>
					</ScrollAnimation>
				</div>
			</ScrollAnimation>
		</section>
	)
}
