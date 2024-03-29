import Image from 'next/image'
import GridLines from '@/lib/GridLines'
import Blob from '@/lib/Blob'
import Flash from '@/lib/Flash'
import LinedBlob from '@/lib/LinedBlob'
import Circle from '@/lib/Circle'
import macbookLight from '@public/macbook_light.png'
import macbookDark from '@public/macbook_dark.png'
import housePlantTall from '@public/house-plant-tall.svg'
import housePlantShort from '@public/house-plant-short.svg'
import eye from '@public/eye.png'
import boot from '@public/boot.png'
import guitar from '@public/guitar.png'
import sunglasses from '@public/sunglasses.png'
import mouth from '@public/mouth.png'
import microphone from '@public/microphone.png'
import arm from '@public/arm.png'
import knight from '@public/knight.png'
import snowboard from '@public/snowboard.png'
import keyboard from '@public/keyboard.png'
import stickman from '@public/stickman.png'
import spatula from '@public/spatula.png'
import me from '@public/me.png'
import TiltImage from '@/lib/TiltImage'
import Button from '@/lib/Button'
import DownArrowIcon from '@/lib/DownArrowIcon'
import ThemeImage from '@/lib/ThemeImage'

export default function LandingSection() {
	return (
		<section className="transition-colors w-full bg-teal dark:bg-indigo">
			<div className="container flex flex-col md:flex-row gap-4 lg:gap-8 pt-4">
				<div className="relative w-full md:w-2/3 h-full">
					<div className="w-full aspect-square">
						<GridLines className="absolute top-[11%] left-[11%] w-[78%]" />
						<TiltImage
							className="absolute top-[15.5%] left-[19%] w-[21.12%]"
							imageProps={{
								priority: true,
								src: eye,
							}}
						/>
						<Blob className="absolute top-[9%] left-[7.4%] w-[49.2%]" />
						<Flash className="absolute top-[1.06%] left-[38.5%] w-[43.3%]" />
						<TiltImage
							className="absolute top-[80%] left-[16%] w-[21%]"
							imageProps={{
								className: 'filter grayscale dark:invert',
								priority: true,
								src: keyboard,
							}}
						/>
						<Circle
							className="absolute top-[63.2%] left-[20.3%] w-[28.6%]"
							circleClassName="fill-red/70 dark:fill-red/50 mix-blend-hard-light"
						/>
						<TiltImage
							className="absolute top-[29.45%] left-[31.23%] h-[34.2%] w-auto"
							imageProps={{
								className: 'h-full w-auto filter grayscale dark:invert',
								priority: true,
								src: knight,
							}}
						/>
						<TiltImage
							className="absolute top-[20%] left-[27%] h-[60%]"
							imageProps={{
								className: 'h-full w-auto',
								priority: true,
								src: snowboard,
							}}
						/>
						<TiltImage
							className="absolute top-[34%] left-[5.06%] w-[22.8%]"
							imageProps={{
								className: 'filter grayscale',
								priority: true,
								src: microphone,
							}}
						/>
						<TiltImage
							className="absolute top-[38%] left-[19.77%] h-[32.18%]"
							imageProps={{
								className: 'h-full w-auto',
								priority: true,
								src: arm,
							}}
						/>
						<LinedBlob className="absolute top-[22%] left-[17.45%] w-[75.4%]" />
						<ThemeImage
							priority
							alt=""
							srcLight={macbookLight}
							srcDark={macbookDark}
							className="absolute top-[22.23%] left-[5%] w-[90%]"
						/>
						<Image priority alt="" src={me} className="absolute top-[31%] left-[52%] h-[69%] w-auto" />
						<Circle
							className="absolute top-[36.45%] left-[63.77%] w-[15.2%]"
							circleClassName="fill-orange dark:fill-yellow"
						/>
						<TiltImage
							className="absolute top-[54.37%] left-[5.18%] h-[19.54%]"
							imageProps={{
								className: 'h-full w-auto',
								priority: true,
								src: stickman,
							}}
						/>
						<TiltImage
							className="absolute top-[49.14%] left-[88%] h-[23.22%]"
							imageProps={{
								className: 'h-full w-auto',
								priority: true,
								src: spatula,
							}}
						/>
						<TiltImage
							className="absolute top-[25.12%] left-[45.94%] w-[8.17%]"
							imageProps={{
								priority: true,
								src: sunglasses,
							}}
						/>
						<TiltImage
							className="absolute top-[29%] left-[47.17%] w-[5.71%]"
							imageProps={{
								priority: true,
								src: mouth,
							}}
						/>
						<TiltImage
							className="absolute top-[13.42%] left-[42.46%] w-[10.32%]"
							imageProps={{
								priority: true,
								src: boot,
							}}
						/>
						<TiltImage
							className="absolute top-[7.83%] left-[53.35%] w-[41.6%]"
							imageProps={{
								priority: true,
								src: guitar,
							}}
						/>
						<TiltImage
							className="absolute top-0 left-[11.35%] w-[16%]"
							imageProps={{
								priority: true,
								src: housePlantTall,
							}}
						/>
						<TiltImage
							className="absolute top-[75.74%] left-[36.64%] w-[10%]"
							imageProps={{
								priority: true,
								src: housePlantShort,
							}}
						/>
					</div>
				</div>
				<div className="w-full md:w-4/12 flex flex-col gap-8 lg:gap-12 justify-center pb-12">
					<h1 className="transition-colors font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-indigo dark:text-white">
						<span className="block font-normal text-lg md:text-xl xl:text-2xl 2xl:text-3xl mb-4 xl:mb-6 text-indigo/75 dark:text-indigo-100/80">
							Hi I&apos;m Ian,
						</span>
						I like to create{' '}
						<span className="font-light text-indigo/75 dark:text-indigo-100/80">interactive</span> things{' '}
						<span className="font-light text-indigo/75 dark:text-indigo-100/80">on the web</span>.
					</h1>
					<div className="flex gap-2 flex-wrap">
						<Button href="#featured-projects" size="large" EndIcon={<DownArrowIcon />}>
							View My Work
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
