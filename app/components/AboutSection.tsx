import Image from 'next/image'
import Markdown from './Markdown'
import Circle from '@/lib/Circle'
import me from '@public/me.png'

export default function AboutSection() {
	return (
		<section id="about-me" className="transition-colors w-full bg-teal dark:bg-indigo py-16 lg:py-32 scroll-mt-16">
			<div className="container">
				<div className="grid md:grid-cols-2 gap-6 items-end md:gap-10 lg:gap-24">
					<div>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Me</h2>
						<Markdown
							text="Hi! I'm Ian, and I'm a human-centered software engineer and designer. I have a background in
							graphic design that always influences my approach to technical problem-solving. I love taking on complex issues and creating novel, delightful solutions."
						/>
						<Markdown text="I've worked alongside incredible human beings at design agencies, consulting groups, startups, and global Fortune 500 companies in industries including real estate, biotechnology, retail, government, and e-commerce." />
						<Markdown text="I believe that technology has the power to positively impact all aspects of society, and I enjoy constantly learning new and creative ways to make that happen." />
						<Markdown text="I'm a big fan of ska, Lego, most outdoor activities, listening to and making music, cooking for friends and family, and spending time with my wife, dog, and cat at our home in Denver, CO." />
					</div>
					<div className="relative aspect-[83/150] -mb-16 lg:-mb-32 max-h-96 md:max-h-[720px] w-full">
						<Image alt="" src={me} className="object-contain object-center h-auto w-full" fill />
						<Circle
							className="absolute top-[8%] left-1/2 -translate-x-1/2 h-[21.5%] md:w-[39.5%] lg:w-[41%]"
							circleClassName="fill-orange dark:fill-yellow"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
