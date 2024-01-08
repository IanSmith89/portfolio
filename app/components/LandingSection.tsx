import Image from 'next/image'
import GridLines from './GridLines'
import Blob from './Blob'
import Flash from './Flash'
import LinedBlob from './LinedBlob'
import Circle from './Circle'
import macbook from '../../public/macbook.svg'

export default function LandingSection() {
	return (
		<section className="transition-colors w-full bg-teal dark:bg-indigo">
			<div className="container flex flex-col md:flex-row gap-4 lg:gap-8 pt-4">
				<div className="relative w-full md:w-2/3 h-full">
					<div className="w-full aspect-square">
						<GridLines className="absolute top-[11%] left-[11%] w-[78%]" />
						<Blob className="absolute top-[9%] left-[7.4%] w-[49.2%]" />
						<Flash className="absolute top-[1.06%] left-[38.5%] w-[43.3%]" />
						<LinedBlob className="absolute top-[22%] left-[17.45%] w-[75.4%]" />
						<Circle className="absolute top-[63.2%] left-[20.3%] w-[28.6%]" />
						<Image alt="" src={macbook} className="absolute top-[22.23%] left-[5%] w-[90%]" />
					</div>
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
							<Button href="#recent-work">VIEW MY WORK</Button>
						</div> */}
				</div>
			</div>
		</section>
	)
}
