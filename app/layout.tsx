import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Providers from './components/Providers'
import Footer from './components/Footer'

export const metadata: Metadata = {
	title: 'Ian J. Smith | UX Engineer & Designer',
	description: 'The portfolio site for Ian J. Smith.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="transition-colors text-indigo dark:text-white">
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
