import { ContainerSectionData } from '@/utils/types'
import Content from './Content'
import ThemeSection from './ThemeSection'

export default function ContainerSection({ section }: { section: ContainerSectionData }) {
	return (
		<ThemeSection background={section.background} center={section.center}>
			{section.blocks.map((block, i) => (
				<Content key={i} block={block} />
			))}
		</ThemeSection>
	)
}
