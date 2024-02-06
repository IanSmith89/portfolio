import { MetadataRoute } from 'next'
import { ORIGIN, isProduction } from '@/utils/constants'

export default function robots(): MetadataRoute.Robots {
	const rules: MetadataRoute.Robots['rules'] = {
		userAgent: '*',
	}

	if (isProduction) rules.allow = '/'
	else rules.disallow = '/'

	return {
		rules,
		sitemap: `${ORIGIN}/sitemap.xml`,
	}
}
