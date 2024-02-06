import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Providers from '@/components/Providers'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import FeedbackSurvey from '@/components/FeedbackSurvey'
import { ORIGIN, SEO } from '@/utils/constants'

export const metadata: Metadata = {
	title: SEO.title,
	description: SEO.description,
	metadataBase: new URL(ORIGIN),
	openGraph: {
		type: 'website',
		url: ORIGIN,
		title: SEO.title,
		description: SEO.description,
		siteName: 'ianjsmith.com',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="scroll-smooth" lang="en" suppressHydrationWarning>
			<body className="transition-colors text-indigo dark:text-white">
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
					<FeedbackSurvey />
				</Providers>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
