import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/Nav'

export const metadata: Metadata = {
	title: 'Ian J. Smith | UX Engineer & Designer',
	description: 'The portfolio site for Ian J. Smith.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="h-full flex flex-col">
				<Nav />
				<main>{children}</main>
				<footer className="flex items-center justify-between px-4 py-2">
					<small className="font-sans font-extralight text-gray-300">Copyright &copy; 2023 Ian Smith</small>
					<div className="flex items-center gap-4">
						<Link href="mailto:iansmith1026@gmail.com" target="_blank">
							Email
						</Link>
						<Link href="https://www.linkedin.com/in/ian-smith" target="_blank">
							LinkedIn
						</Link>
						<Link href="https://github.com/IanSmith89" target="_blank">
							GitHub
						</Link>
						<Link href="https://medium.com/@iansmith1026" target="_blank">
							Blog
						</Link>
					</div>
				</footer>
			</body>
		</html>
	)
}
