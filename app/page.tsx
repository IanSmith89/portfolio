import ResumeSection from '@/components/ResumeSection'
import ContactSection from '@/components/ContactSection'
import LandingSection from '@/components/LandingSection'
import WorkSection from '@/components/WorkSection'

export default function HomePage() {
	return (
		<>
			<LandingSection />
			<WorkSection />
			{/* <section
				id="about-me"
				className="transition-colors w-full min-h-[66vh] bg-teal dark:bg-indigo py-6 md:py-12"
			>
				<div className="container">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Me</h2>
				</div>
			</section> */}
			<ResumeSection />
			<ContactSection />
		</>
	)
}
