import './globals.css'
import Header from '@/components/Header'
import Providers from '@/components/Providers'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { METADATA } from '@/utils/constants'

export const metadata = METADATA

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="scroll-smooth" lang="en" suppressHydrationWarning>
			<body className="transition-colors text-indigo dark:text-white">
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
