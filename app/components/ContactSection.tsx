import ContactForm from './ContactForm'

export default function ContactSection() {
	return (
		<section id="contact" className="transition-colors w-full h-auto bg-teal dark:bg-indigo py-16 md:py-32">
			<div className="container grid md:grid-cols-2 gap-6 md:gap-24 lg:gap-36">
				<div className="flex flex-col gap-4 lg:gap-6 justify-center">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Let&apos;s Talk</h2>
					<p className="prose dark:text-white/70">
						Feel free to reach out with any questions, freelance opportunities, suggestions for how I might
						improve my portfolio site, or to simply say hello.
					</p>
				</div>
				<ContactForm />
			</div>
		</section>
	)
}
