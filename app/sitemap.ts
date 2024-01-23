import { MetadataRoute } from 'next'
import { ORIGIN, PROJECTS_URL } from '@/utils/constants'
import projects from '@/data/projects.json'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: ORIGIN,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		...projects.map(
			(project) =>
				({
					url: `${ORIGIN}${PROJECTS_URL}/${project.handle}`,
					lastModified: new Date(),
					changeFrequency: 'monthly',
					priority: 0.8,
				} as any)
		),
	]
}
