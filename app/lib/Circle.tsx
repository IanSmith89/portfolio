export default function Circle({ className = '', circleClassName = '' }) {
	return (
		<svg className={className} fill="none" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
			<circle className={circleClassName} cx="120" cy="120" r="120" />
		</svg>
	)
}
