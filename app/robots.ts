import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const rules: MetadataRoute.Robots['rules'] = {
		userAgent: '*',
	}

	if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') rules.allow = '/'
	else rules.disallow = '/'

	return {
		rules,
		sitemap: `${process.env.NEXT_PUBLIC_VERCEL_URL}/sitemap.xml`,
	}
}
