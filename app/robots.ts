import { MetadataRoute } from 'next'
import { ORIGIN, IS_PROD } from '@/utils/constants'

export default function robots(): MetadataRoute.Robots {
	const rules: MetadataRoute.Robots['rules'] = {
		userAgent: '*',
	}

	if (IS_PROD) rules.allow = '/'
	else rules.disallow = '/'

	return {
		rules,
		sitemap: `${ORIGIN}/sitemap.xml`,
	}
}
