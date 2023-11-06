import type { Metadata } from 'next'
import { Changa } from 'next/font/google'
import './globals.css'

const changa = Changa({ subsets: ['latin'], display: 'swap', variable: '--font-changa' })

export const metadata: Metadata = {
	title: 'Ian J. Smith | UX Engineer & Designer',
	description: 'The portfolio site for Ian J. Smith.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${changa.variable}`}>{children}</body>
		</html>
	)
}
