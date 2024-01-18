import { ContainerSection } from '@/utils/types'
import Content from './Content'
import ThemeSection from './ThemeSection'

export default function ProjectContainerSection({ section }: { section: ContainerSection }) {
	return (
		<ThemeSection background={section.background}>
			<div className="container">
				{section.content.map((contentBlock) => (
					<Content key={contentBlock.title} contentBlock={contentBlock} />
				))}
			</div>
		</ThemeSection>
	)
}
