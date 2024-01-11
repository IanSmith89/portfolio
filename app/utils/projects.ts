export type Project = {
	backgroundImage?: string
	handle: string
	longTitle?: string
	shortTitle: string
	subTitle?: string
}

export const PROJECTS_URL: string = '/projects'

export const PROJECTS: Project[] = [
	{
		backgroundImage: 'cyclists.jpg',
		handle: 'tpc-rebrand',
		longTitle: 'Rebranding TPC: A Lesson in Engineering Leadership',
		shortTitle: 'TPC: E-commerce Rebrand',
		subTitle: 'Leading the technical efforts to rebrand, optimize, and modernize the TPC e-commerce website',
	},
	{
		backgroundImage: '',
		handle: 'tpc-component-library',
		longTitle: '',
		shortTitle: 'TPC: Component Library',
	},
	{
		backgroundImage: '',
		handle: 'starbucks-s4-apps',
		longTitle: '',
		shortTitle: 'Starbucks: Web Apps',
	},
	{
		backgroundImage: '',
		handle: 'wa-doh-vaccine-locator',
		longTitle: '',
		shortTitle: 'WA DOH: Vaccine Locator',
	},
	{
		backgroundImage: '',
		handle: 'astarte-inventory-management',
		longTitle: '',
		shortTitle: 'Astarte: Inventory Management System',
	},
	{
		backgroundImage: '',
		handle: 'paragon',
		longTitle: '',
		shortTitle: 'Paragon: Luxury Real Estate Website',
	},
	{
		backgroundImage: '',
		handle: 'paragon-property-management',
		longTitle: '',
		shortTitle: 'Paragon: Property Management System',
	},
	{
		backgroundImage: '',
		handle: 'mighty-vet-ux',
		longTitle: '',
		shortTitle: 'Mighty Vet: Website Concept',
	},
	{
		backgroundImage: '',
		handle: 'wa-state-parks-camping-reservations',
		longTitle: '',
		shortTitle: 'WA State Parks: Camping Reservation System',
	},
	{
		backgroundImage: '',
		handle: 'high-seas-portfolio',
		longTitle: '',
		shortTitle: 'High Seas: Portfolio Website',
	},
	{
		backgroundImage: '',
		handle: 'ian-j-smith-portfolio',
		longTitle: '',
		shortTitle: "ianjsmith.com: How It's Made",
	},
]
