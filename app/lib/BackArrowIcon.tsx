export default function BackArrowIcon({ className = '' }) {
	return (
		<svg
			className={`flex-shrink-0 rotate-180 ${className}`}
			xmlns="http://www.w3.org/2000/svg"
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
