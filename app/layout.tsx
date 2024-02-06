import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Providers from '@/components/Providers'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import FeedbackSurvey from '@/components/FeedbackSurvey'

export const metadata: Metadata = {
	title: 'Ian J. Smith | Software Engineer & UX Designer',
	description:
		"Welcome to the portfolio site for Ian J. Smith, a human-centered software engineer and creative technologist. Explore a diverse showcase of projects highlighting Ian's contributions to design and development.",
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
