import Markdown from '@/components/Markdown'

export type ListProps = {
	children: string[]
	ordered?: boolean
}

export default function List({ children, ordered = false }: ListProps) {
	let listItemClasses = 'mb-3'

	if (ordered) listItemClasses += ' flex items-start gap-3'

	const listItems = children.map((li, i) => (
		<li key={li} className={listItemClasses}>
			{ordered ? (
				<div className="min-w-7 min-h-7 flex items-center justify-center rounded-full bg-indigo dark:bg-teal text-white dark:text-indigo font-medium">
					{i + 1}
				</div>
			) : null}
			<Markdown text={li} />
		</li>
	))

	if (ordered) return <ol className="mb-4 list-none [counter-reset:item]">{listItems}</ol>

	return <ul className="mb-4">{listItems}</ul>
}
