import type { Metadata } from 'next'
import { Changa } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

const changa = Changa({ subsets: ['latin'], display: 'swap', variable: '--font-changa' })

export const metadata: Metadata = {
	title: 'Ian J. Smith | UX Engineer & Designer',
	description: 'The portfolio site for Ian J. Smith.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="h-full" lang="en">
			<body className={`${changa.variable} h-full flex flex-col`}>
				<main className="grow">{children}</main>
				<footer className="flex items-center justify-between px-4 py-2">
					<small className="font-sans font-extralight text-gray-300">Copyright &copy; 2023 Ian Smith</small>
					<div className="flex items-center">
						<Link href="mailto:iansmith1026@gmail.com" target="_blank">
							<Image
								alt="Email icon"
								src="/mail-icon.svg"
								width={32}
								height={32}
								className="dark:invert"
							/>
						</Link>
						<Link href="https://www.linkedin.com/in/ian-smith" target="_blank">
							<Image
								alt="LinkedIn icon"
								src="/linkedin-icon.svg"
								width={32}
								height={32}
								className="dark:invert"
							/>
						</Link>
						<Link href="https://github.com/IanSmith89" target="_blank">
							<Image
								alt="GitHub icon"
								src="/github-icon.svg"
								width={32}
								height={32}
								className="dark:invert"
							/>
						</Link>
						<Link href="https://medium.com/@iansmith1026" target="_blank">
							<Image
								alt="Medium icon"
								src="/medium-icon.svg"
								width={32}
								height={32}
								className="dark:invert"
							/>
						</Link>
					</div>
				</footer>
			</body>
		</html>
	)
}
