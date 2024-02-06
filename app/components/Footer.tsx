import Link from '@/lib/Link'
import EyeJayEsLogo from '@/lib/EyeJayEsLogo'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-teal-100 dark:bg-grey-blue text-indigo dark:text-white pt-6 pb-8">
			<div className="container flex flex-col items-center gap-8">
				<div className="w-full flex flex-col gap-4 sm:flex-row items-center justify-between">
					<small className="text-[10px] font-sans text-indigo/70 dark:text-indigo-100/80 max-w-[216px] text-center sm:text-left">
						&copy; {currentYear} Ian J. Smith, All Rights Reserved. Website designed and built by me &mdash;
						inspired by{' '}
						<Link
							className="transition-colors underline hover:text-indigo dark:hover:text-white"
							href="https://www.madeinspace.la/"
							target="_blank"
						>
							April Greiman
						</Link>{' '}
						and{' '}
						<Link
							className="transition-colors underline hover:text-indigo dark:hover:text-white"
							href="https://www.youtube.com/watch?v=eU7V4GyEuXA"
							target="_blank"
						>
							John Baldessari
						</Link>
						.
					</small>
					<div className="flex items-center gap-4">
						<Link
							className="transition-colors hover:underline text-indigo/80 hover:text-indigo dark:text-indigo-100/80 dark:hover:text-white"
							href="mailto:iansmith1026@gmail.com"
							target="_blank"
						>
							Email
						</Link>
						<Link
							className="transition-colors hover:underline text-indigo/80 hover:text-indigo dark:text-indigo-100/80 dark:hover:text-white"
							href="https://www.linkedin.com/in/ian-smith"
							target="_blank"
						>
							LinkedIn
						</Link>
						<Link
							className="transition-colors hover:underline text-indigo/80 hover:text-indigo dark:text-indigo-100/80 dark:hover:text-white"
							href="https://github.com/IanSmith89"
							target="_blank"
						>
							GitHub
						</Link>
						<Link
							className="transition-colors hover:underline text-indigo/80 hover:text-indigo dark:text-indigo-100/80 dark:hover:text-white"
							href="https://medium.com/@iansmith1026"
							target="_blank"
						>
							Blog
						</Link>
					</div>
				</div>
				<EyeJayEsLogo className="w-3/4 md:w-2/3" width={800} />
				<p className="font-medium text-2xl">(eye - jay - es)</p>
			</div>
		</footer>
	)
}
