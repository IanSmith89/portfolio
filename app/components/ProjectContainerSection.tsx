import { ContainerProjectSection } from '@/utils/types'
import Content from './Content'

export default function ProjectContainerSection({ section }: { section: ContainerProjectSection }) {
	return (
		<section className={`py-8 ${section.background === 'light' ? 'bg-white dark:bg-grey-blue/50' : ''}`}>
			<div className="container">
				{section.content.map((contentBlock) => (
					<Content key={contentBlock.title} contentBlock={contentBlock} />
				))}
			</div>
		</section>
	)
}
