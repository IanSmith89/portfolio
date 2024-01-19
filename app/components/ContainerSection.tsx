import { ContainerSectionData } from '@/utils/types'
import Content from './Content'
import ThemeSection from './ThemeSection'

export default function ContainerSection({ section }: { section: ContainerSectionData }) {
	return (
		<ThemeSection background={section.background} center={section.center}>
			{Array.isArray(section.content) ? (
				section.content.map((contentBlock, i) => <Content key={i} contentBlock={contentBlock} />)
			) : (
				<Content contentBlock={section.content} />
			)}
		</ThemeSection>
	)
}
