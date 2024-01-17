'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ImageCompareProjectSection } from '@/utils/types'
import phone from '@public/phone.svg'
import macbook from '@public/macbook.svg'
import Button from '@/lib/Button'
import BackArrowIcon from '@/lib/BackArrowIcon'
import ForwardArrowIcon from '@/lib/ForwardArrowIcon'

export default function ProjectImageCompareSection({ section }: { section: ImageCompareProjectSection }) {
	const [rangeValue, setRangeValue] = useState<number>(50)

	const handleRangeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setRangeValue(Number.parseInt(e.target.value, 10))
	}

	return (
		<section className={`py-8 ${section.background === 'light' ? 'bg-white dark:bg-grey-blue/50' : ''}`}>
			<div className="container">
				<h3 className="font-medium text-center text-2xl md:text-3xl mb-4">Before & After</h3>
				<div className="relative">
					<div className="md:hidden absolute aspect-[95/196] bg-black/20 w-[95%] left-[2.5%] top-[5%] rounded-[32px] overflow-y-auto">
						<Image
							alt=""
							src={`/${section.content.mobile.image1}`}
							className="absolute top-0 left-0 w-full h-auto"
							width={800}
							height={13887}
						/>
						<Image
							alt=""
							src={`/${section.content.mobile.image2}`}
							className="absolute top-0 left-0 w-full h-auto"
							style={{
								clipPath: `inset(0 0 0 ${rangeValue}%)`,
							}}
							width={800}
							height={13887}
						/>
						<div className="w-full h-full sticky top-0 overflow-x-hidden">
							<div
								className="absolute w-px bg-indigo/25 h-full"
								style={{
									left: `${rangeValue}%`,
								}}
							/>
							<Button
								className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
								size="large"
								style={{
									left: `${rangeValue}%`,
								}}
							>
								<BackArrowIcon className="w-6" />
								<ForwardArrowIcon className="w-6" />
							</Button>
							<input
								className="absolute top-1/2 -translate-y-1/2 w-full bg-transparent cursor-pointer appearance-none pointer-events-none focus:outline-none

                                [&::-webkit-slider-thumb]:pointer-events-auto
                                [&::-webkit-slider-thumb]:w-[98px]
                                [&::-webkit-slider-thumb]:h-[54px]
                                [&::-webkit-slider-thumb]:appearance-none
                                [&::-webkit-slider-thumb]:rounded-full
                                
                                [&::-moz-range-thumb]:pointer-events-auto
                                [&::-moz-range-thumb]:w-[98px]
                                [&::-moz-range-thumb]:h-[54px]
                                [&::-moz-range-thumb]:appearance-none
                                [&::-moz-range-thumb]:rounded-full
                                "
								type="range"
								min="0"
								max="100"
								onChange={handleRangeChange}
								value={rangeValue}
								aria-label="Percentage of before photo shown"
							/>
						</div>
					</div>
					<Image alt="" src={phone} className="relative md:hidden w-full h-auto pointer-events-none" />
					<div className="hidden md:block absolute aspect-[243/158] bg-black/20 w-[77%] left-[11.5%] top-[5%] overflow-y-auto">
						<Image
							alt=""
							src={`/${section.content.desktop.image1}`}
							className="absolute top-0 left-0 w-full h-auto"
							width={1280}
							height={4658}
						/>
						<Image
							alt=""
							src={`/${section.content.desktop.image2}`}
							className="absolute top-0 left-0 w-full h-auto"
							style={{
								clipPath: `inset(0 0 0 ${rangeValue}%)`,
							}}
							width={1280}
							height={4658}
						/>
						<div className="w-full h-full sticky top-0 overflow-x-hidden">
							<div
								className="absolute w-px bg-indigo/25 h-full"
								style={{
									left: `${rangeValue}%`,
								}}
							/>
							<Button
								className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
								style={{
									left: `${rangeValue}%`,
								}}
							>
								<BackArrowIcon className="w-6" />
								<ForwardArrowIcon className="w-6" />
							</Button>
							<input
								className="absolute top-1/2 -translate-y-1/2 w-full bg-transparent cursor-pointer appearance-none pointer-events-none focus:outline-none

                                [&::-webkit-slider-thumb]:pointer-events-auto
                                [&::-webkit-slider-thumb]:w-[98px]
                                [&::-webkit-slider-thumb]:h-[54px]
                                [&::-webkit-slider-thumb]:appearance-none
                                [&::-webkit-slider-thumb]:rounded-full
                                
                                [&::-moz-range-thumb]:pointer-events-auto
                                [&::-moz-range-thumb]:w-[98px]
                                [&::-moz-range-thumb]:h-[54px]
                                [&::-moz-range-thumb]:appearance-none
                                [&::-moz-range-thumb]:rounded-full
                                "
								type="range"
								min="0"
								max="100"
								onChange={handleRangeChange}
								value={rangeValue}
								aria-label="Percentage of before photo shown"
							/>
						</div>
					</div>
					<Image
						alt=""
						src={macbook}
						className="relative hidden md:block w-full h-auto pointer-events-none"
					/>
				</div>
			</div>
		</section>
	)
}
