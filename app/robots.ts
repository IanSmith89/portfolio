import { MetadataRoute } from 'next'
import { ORIGIN } from '@/utils/constants'

export default function robots(): MetadataRoute.Robots {
	const rules: MetadataRoute.Robots['rules'] = {
		userAgent: '*',
	}

	if (process.env.VERCEL_ENV === 'production') rules.allow = '/'
	else rules.disallow = '/'

	return {
		rules,
		sitemap: `${ORIGIN}/sitemap.xml`,
	}
}
