import ContactForm from './ContactForm'

export default function ContactSection() {
	return (
		<section id="contact" className="transition-colors w-full min-h-[66vh] bg-teal dark:bg-indigo py-6 md:py-12">
			<div className="container">
				<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Let&apos;s Talk</h2>
				<ContactForm />
			</div>
		</section>
	)
}
