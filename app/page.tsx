import LandingSection from '@/components/LandingSection'
import AboutSection from './components/AboutSection'
import WorkSection from '@/components/WorkSection'
import ResumeSection from '@/components/ResumeSection'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
	return (
		<>
			<LandingSection />
			<WorkSection />
			<AboutSection />
			<ResumeSection />
			<ContactSection />
		</>
	)
}
