import Link from 'next/link'
import ThemeImage from './ThemeImage'
import tpcLight from '../../public/tpc_light.png'
import tpcDark from '../../public/tpc_dark.png'
import starbucksLight from '../../public/starbucks_light.png'
import starbucksDark from '../../public/starbucks_dark.png'
import microsoftLight from '../../public/microsoft_light.png'
import microsoftDark from '../../public/microsoft_dark.png'
import boeingLight from '../../public/boeing_light.png'
import boeingDark from '../../public/boeing_dark.png'
import highSeasLight from '../../public/high-seas_light.png'
import highSeasDark from '../../public/high-seas_dark.png'
import Button from './Button'

export default function ResumeSection() {
	return (
		<section
			id="resume-section"
			className="transition-colors w-full h-auto bg-white dark:bg-grey-blue py-12 md:py-32"
		>
			<div className="container w-full h-full flex flex-col gap-16 items-center justify-center">
				<h2 className="text-xl md:text-2xl font-bold text-center mx-auto max-w-lg">
					I&apos;m grateful to have worked alongside amazing people at industry-leading, world-changing
					companies:
				</h2>
				<div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
					<Link href="https://www.theproscloset.com" target="_blank">
						<ThemeImage
							alt="TPC logo"
							srcLight={tpcLight}
							srcDark={tpcDark}
							className="w-72 md:w-48 h-auto"
						/>
					</Link>
					<Link href="https://www.starbucks.com" target="_blank">
						<ThemeImage
							alt="Starbucks logo"
							srcLight={starbucksLight}
							srcDark={starbucksDark}
							className="w-72 md:w-48 h-auto"
						/>
					</Link>
					<Link href="https://www.microsoft.com" target="_blank">
						<ThemeImage
							alt="Microsoft logo"
							srcLight={microsoftLight}
							srcDark={microsoftDark}
							className="w-72 md:w-48 h-auto"
						/>
					</Link>
					<Link href="https://www.boeing.com" target="_blank">
						<ThemeImage
							alt="Boeing logo"
							srcLight={boeingLight}
							srcDark={boeingDark}
							className="w-72 md:w-48 h-auto"
						/>
					</Link>
					<Link href="https://highseas.com" target="_blank">
						<ThemeImage
							alt="High Seas logo"
							srcLight={highSeasLight}
							srcDark={highSeasDark}
							className="w-72 md:w-48 h-auto"
						/>
					</Link>
				</div>
				<Button href="https://drive.google.com/file/d/1LKmlhusey6vC3NRcg_3iTnJ5NARl46lv/view" target="_blank">
					VIEW MY FULL RÉSUMÉ
				</Button>
			</div>
		</section>
	)
}
