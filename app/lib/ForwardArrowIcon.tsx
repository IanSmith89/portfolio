export default function ForwardArrowIcon({ className = '', width = 24 }) {
	return (
		<svg
			className={`flex-shrink-0 w-4 h-4 ${className}`}
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={width}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M5 12h14" />
			<path d="m12 5 7 7-7 7" />
		</svg>
	)
}
