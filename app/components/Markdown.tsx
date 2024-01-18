import ReactMarkdown from 'react-markdown'

export default function Markdown({ text }: { text: string }) {
	return (
		<ReactMarkdown
			components={{
				p({ children, className, node, ...rest }) {
					return (
						<p {...rest} className="prose font-normal text-indigo/90 dark:text-indigo-100">
							{children}
						</p>
					)
				},
				strong({ children, className, node, ...rest }) {
					return (
						<strong {...rest} className="prose text-indigo dark:text-white">
							{children}
						</strong>
					)
				},
			}}
		>
			{text}
		</ReactMarkdown>
	)
}
