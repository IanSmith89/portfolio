import ReactMarkdown from 'react-markdown'

export default function Markdown({ text }: { text: string }) {
	return (
		<ReactMarkdown
			components={{
				p({ children, className, node, ...rest }) {
					return (
						<p {...rest} className="prose text-indigo dark:text-white">
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
