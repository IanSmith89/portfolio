import Image from 'next/image'
import { ImageCompareProjectSection } from '@/utils/types'
import phone from '@public/phone.svg'
import macbook from '@public/macbook.svg'

export default function ProjectImageCompareSection({ section }: { section: ImageCompareProjectSection }) {
	return (
		<section className={`py-8 ${section.background === 'light' ? 'bg-white dark:bg-grey-blue/50' : ''}`}>
			<div className="container">
				<div className="relative">
					<h3 className="font-medium text-2xl md:text-3xl mb-4">Before & After</h3>
					<div className="absolute aspect-[95/196] bg-red w-[95%] left-[2.5%] top-[10.5%] rounded-[32px] overflow-y-auto">
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
							className="absolute top-0 left-0 w-full h-auto [clip-path:inset(0_0_0_50%)]"
							width={800}
							height={13887}
						/>
					</div>
					<Image alt="" src={phone} className="relative md:hidden w-full h-auto pointer-events-none" />
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
