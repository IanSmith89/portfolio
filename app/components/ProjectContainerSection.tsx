import { ContainerProjectSection } from '@/utils/types'
import Markdown from './Markdown'

export default function ProjectContainerSection({ section }: { section: ContainerProjectSection }) {
	return (
		<section className={`py-8 ${section.background === 'light' ? 'bg-white dark:bg-grey-blue/50' : ''}`}>
			<div className="container">
				{section.content.map((contentBlock) => {
					return (
						<div key={contentBlock.title} className="mb-6">
							<h3 className="font-medium text-2xl md:text-3xl mb-4">{contentBlock.title}</h3>
							{contentBlock.type === 'text'
								? contentBlock.content.map((p) => <Markdown key={p} text={p} />)
								: null}
							{contentBlock.type === 'list' ? (
								<ul className="mb-4">
									{contentBlock.content.map((li) => (
										<li key={li} className="mb-3">
											<Markdown key={li} text={li} />
										</li>
									))}
								</ul>
							) : null}
						</div>
					)
				})}
			</div>
		</section>
	)
}
