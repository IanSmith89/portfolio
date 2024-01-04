export default function Section({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<section className={`w-full min-h-[80vh] bg-white dark:bg-indigo-900 py-6 ${className}`}>
			<div className="container h-full">{children}</div>
		</section>
	)
}
