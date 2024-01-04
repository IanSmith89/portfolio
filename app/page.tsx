import Image from 'next/image'

export default function Home() {
	return (
		<div className="w-full bg-teal dark:bg-indigo pt-8">
			<div className="container h-[80vh] md:h-[50vh] lg:h-[55vh] xl:h-[75vh] 2xl:h-[85vh] flex flex-col md:flex-row gap-4 lg:gap-8">
				<div className="relative w-full md:w-8/12 h-[100vw] md:h-full lg:h-full">
					<Image
						alt=""
						className="object-cover md:object-contain object-top"
						src="/collage-light.png"
						fill
						blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						placeholder="blur"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<div className="w-full md:w-4/12">
					<h1 className="font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-indigo dark:text-teal">
						<span className="block font-normal text-sm sm:text-base md:text-xl xl:text-2xl 2xl:text-3xl mb-4">
							Hi I&apos;m Ian,
						</span>
						I like to create <span className="font-light">interactive</span> things{' '}
						<span className="font-light">on the web</span>.
					</h1>
				</div>
			</div>
		</div>
	)
}
