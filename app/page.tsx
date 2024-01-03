import Image from 'next/image'

export default function Home() {
	return (
		<div className="w-full bg-teal pt-8">
			<div className="container h-[80vh] flex flex-col md:flex-row gap-8">
				<div className="relative w-full md:w-8/12 h-3/5 sm:h-1/2 md:h-auto">
					<Image
						alt=""
						src="/collage-light.png"
						fill
						priority
						style={{
							objectFit: 'contain',
							objectPosition: 'top center',
						}}
					/>
				</div>
				<div className="w-full md:w-4/12">
					<h1 className="font-bold text-4xl md:text-4xl lg:text-8xl text-indigo">
						<span className="font-normal text-sm md:text-2xl lg:text-4xl">Hi I&apos;m Ian,</span>
						<br />I like to create <span className="font-light">interactive</span> things{' '}
						<span className="font-light">on the web</span>.
					</h1>
				</div>
			</div>
		</div>
	)
}
