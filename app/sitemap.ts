import { MetadataRoute } from 'next'
import { PROJECTS_URL } from '@/utils/constants'
import projects from '@/data/projects.json'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: process.env.NEXT_PUBLIC_VERCEL_URL,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		...projects.map(
			(project) =>
				({
					url: `${process.env.NEXT_PUBLIC_VERCEL_URL}${PROJECTS_URL}/${project.handle}`,
					lastModified: new Date(),
					changeFrequency: 'monthly',
					priority: 0.8,
				} as any)
		),
	]
}
