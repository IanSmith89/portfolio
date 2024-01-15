import { MetadataRoute } from 'next'
import { ORIGIN } from './utils/constants'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${ORIGIN}/sitemap.xml`,
	}
}
