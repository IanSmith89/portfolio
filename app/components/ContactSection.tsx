import { WEB_FORM_KEY } from '../utils/constants'
import Input from './Input'

export default function ContactSection() {
	return (
		<section id="contact" className="transition-colors w-full min-h-[66vh] bg-teal dark:bg-indigo py-6 md:py-12">
			<div className="container">
				<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Let&apos;s Talk</h2>
				<form action="https://api.web3forms.com/submit" method="POST">
					<Input type="hidden" name="access_key" value={WEB_FORM_KEY} />
					<Input type="hidden" name="subject" value="New Contact Submission from ianjsmith.com" />

					<Input type="hidden" name="from_name" value="Your Website Name" />
					<Input type="hidden" name="replyto" value="customer@example.com" />

					<Input type="hidden" name="redirect" value="https://web3forms.com/success" />
					<Input type="checkbox" name="botcheck" id="" className="hidden" />

					<Input type="email" name="email" label="Email" required />
					<Input type="text" name="name" label="Name (optional)" />
					<textarea name="message" cols={30} rows={10} required></textarea>

					<button type="submit">SEND MESSAGE</button>
				</form>
			</div>
		</section>
	)
}
