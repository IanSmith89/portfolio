export default function SolidBlob({ className = '' }) {
	return (
		<svg className={className} fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<path
				className="fill-yellow dark:fill-yellow/20 mix-blend-multiply dark:mix-blend-hard-light"
				d="M0,53.22c0-10.82,2.14-21.42,7.39-30.98C11.99,13.89,18.98,4.75,28.16,1.13c10.72-4.23,18.7,4.13,23.02,12.95,2.24,4.57,3.85,9.63,7.27,13.5,3.25,3.68,7.91,5.11,12.65,5.74,9.27,1.24,21.97-.66,27.07,9.34,2.16,4.24,1.91,9.36,1.69,13.99-.25,5.02-1.69,9.85-4.47,14.06-5.61,8.49-14.78,15.16-23.53,20.13-9.35,5.31-19.83,9.04-30.69,9.15-11.82.12-23.42-3.69-31.32-12.72C1.44,77.66.64,65.38,0,53.22Z"
			/>
		</svg>
	)
}
