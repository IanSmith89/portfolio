'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ImageCompareBlock } from '@/utils/types'
import phone from '@public/phone.svg'
import macbook from '@public/macbook.svg'
import Button from '@/lib/Button'
import BackArrowIcon from '@/lib/BackArrowIcon'
import ForwardArrowIcon from '@/lib/ForwardArrowIcon'

export default function ImageComparison({ block }: { block: ImageCompareBlock }) {
	const [rangeValue, setRangeValue] = useState<number>(50)

	const handleRangeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setRangeValue(Number.parseInt(e.target.value, 10))
	}

	return (
		<div className="relative">
			<div className="absolute aspect-[95/196] md:aspect-[243/158] bg-black/20 w-[95%] md:w-[77%] left-[2.5%] md:left-[11.5%] top-[5%] overflow-y-auto">
				{/* Mobile Images */}
				<Image
					alt=""
					src={block.content.mobile.image1}
					className="md:hidden absolute top-0 left-0 w-full h-auto"
					width={block.content.mobile.imageWidth}
					height={block.content.mobile.imageHeight}
				/>
				<Image
					alt=""
					src={block.content.mobile.image2}
					className="md:hidden absolute top-0 left-0 w-full h-auto"
					style={{
						clipPath: `inset(0 0 0 ${rangeValue}%)`,
					}}
					width={block.content.mobile.imageWidth}
					height={block.content.mobile.imageHeight}
				/>
				{/* Desktop Images */}
				<Image
					alt=""
					src={block.content.desktop.image1}
					className="hidden md:block absolute top-0 left-0 w-full h-auto"
					width={block.content.desktop.imageWidth}
					height={block.content.desktop.imageHeight}
				/>
				<Image
					alt=""
					src={block.content.desktop.image2}
					className="hidden md:block absolute top-0 left-0 w-full h-auto"
					style={{
						clipPath: `inset(0 0 0 ${rangeValue}%)`,
					}}
					width={block.content.desktop.imageWidth}
					height={block.content.desktop.imageHeight}
				/>
				<div className="w-full h-full sticky top-0 overflow-x-hidden">
					<div
						className="absolute w-px bg-indigo/25 h-full"
						style={{
							left: `${rangeValue}%`,
						}}
					/>
					<Button
						className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md"
						style={{
							left: `${rangeValue}%`,
						}}
					>
						<BackArrowIcon className="w-6" />
						<ForwardArrowIcon className="w-6" />
					</Button>
					<input
						className="absolute top-1/2 -translate-y-1/2 w-full bg-transparent cursor-grab appearance-none pointer-events-none focus:outline-none

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
			<Image alt="" src={phone} className="md:hidden relative w-full h-auto pointer-events-none" />
			<Image alt="" src={macbook} className="hidden md:block relative w-full h-auto pointer-events-none" />
		</div>
	)
}
