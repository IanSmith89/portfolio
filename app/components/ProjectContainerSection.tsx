import { ContainerSection } from '@/utils/types'
import Content from './Content'
import ThemeSection from './ThemeSection'

export default function ProjectContainerSection({ section }: { section: ContainerSection }) {
	return (
		<ThemeSection background={section.background} center={section.center}>
			{section.content.map((contentBlock) => (
				<Content key={contentBlock.title} contentBlock={contentBlock} />
			))}
		</ThemeSection>
	)
}
