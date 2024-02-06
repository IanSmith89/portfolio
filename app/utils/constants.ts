import type { Metadata } from 'next'

export enum ENVIRONMENT {
	production = 'production',
	preview = 'preview',
	development = 'development',
}

export const IS_PROD = process.env.VERCEL_ENV === ENVIRONMENT.production

export const NAV_ROUTES = [
	{
		href: '/#featured-projects',
		title: 'Work',
	},
	{
		href: '/#about-me',
		title: 'About',
	},
	{
		href: '/#resume',
		title: 'Résumé',
	},
	{
		href: '/#contact',
		title: 'Contact',
	},
]

export const WEB_FORM_KEY = '5602ac20-bcd3-48da-bd9e-51ddde3b01df'

export const PROJECTS_URL = '/projects'

export const ORIGIN = IS_PROD
	? 'https://ianjsmith.com'
	: `${process.env.VERCEL_ENV === 'preview' ? 'https://' : 'http://'}${process.env.VERCEL_URL}`

const description =
	"Welcome to the portfolio site for Ian J. Smith, a human-centered software engineer, creative technologist, and UX designer. Explore a diverse showcase of projects highlighting Ian's contributions to design and development."
export const DEFAULT_TITLE = 'Ian J. Smith - Software Engineer & UX Designer'

export const METADATA: Metadata = {
	category: 'technology',
	creator: 'Ian J. Smith',
	description,
	keywords: ['Portfolio', 'Software', 'Engineering', 'Development', 'UX', 'Design', 'Frontend'],
	metadataBase: new URL(ORIGIN),
	openGraph: {
		description,
		locale: 'en_US',
		siteName: 'ianjsmith.com',
		title: DEFAULT_TITLE,
		type: 'website',
		url: ORIGIN,
	},
	referrer: 'origin-when-cross-origin',
	robots: {
		follow: IS_PROD,
		index: IS_PROD,
		noarchive: !IS_PROD,
		nocache: !IS_PROD,
	},
	title: {
		default: DEFAULT_TITLE,
		template: `%s | ${DEFAULT_TITLE}`,
	},
}
