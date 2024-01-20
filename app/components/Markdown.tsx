import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export type MarkdownProps = {
	className?: string
	text: string
}

export default function Markdown({ className, text }: MarkdownProps) {
	return (
		<ReactMarkdown
			components={{
				a({ children, href, node, ref, target, ...rest }) {
					return (
						<Link
							{...rest}
							className={`font-normal text-indigo/90 dark:text-indigo-100 hover:text-indigo dark:hover:text-white ${className}`}
							href={href || ''}
							target={href?.startsWith('http') ? '_blank' : target}
						>
							{children}
						</Link>
					)
				},
				p({ children, node, ...rest }) {
					return (
						<p
							{...rest}
							className={`prose font-normal text-indigo/90 dark:text-indigo-100 mb-3 ${className}`}
						>
							{children}
						</p>
					)
				},
				strong({ children, node, ...rest }) {
					return (
						<strong {...rest} className={`prose text-indigo dark:text-white ${className}`}>
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
