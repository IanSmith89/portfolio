import { TwoColumnSection } from '@/utils/types'
import Content from './Content'
import ThemeSection from './ThemeSection'

export default function Project2ColumnSection({ section }: { section: TwoColumnSection }) {
	return (
		<ThemeSection background={section.background}>
			<div className="grid md:grid-cols-2 md:gap-10">
				<div>
					{section.content.col1.map((col1Content) => (
						<Content key={col1Content.title} contentBlock={col1Content} />
					))}
				</div>
				<div>
					{section.content.col2.map((col2Content) => (
						<Content key={col2Content.title} contentBlock={col2Content} />
					))}
				</div>
			</div>
		</ThemeSection>
	)
}
