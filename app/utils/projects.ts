export type Project = {
	backgroundImage?: string
	handle: string
	longTitle?: string
	shortSubtitle?: string
	shortTitle: string
	longSubtitle?: string
}

export const PROJECTS_URL: string = '/projects'

export const PROJECTS: Project[] = [
	{
		backgroundImage: 'cyclists.jpg',
		handle: 'tpc-rebrand',
		longSubtitle: 'Leading the technical efforts to rebrand, optimize, and modernize the TPC e-commerce website',
		longTitle: 'Rebranding TPC: A Lesson in Engineering Leadership',
		shortSubtitle: 'E-Commerce Rebrand',
		shortTitle: 'TPC',
	},
	{
		backgroundImage: 'coffee.jpg',
		handle: 'starbucks-s4-apps',
		longSubtitle: 'Developing a design system and component library for internal Starbucks web apps',
		longTitle: 'Transforming HR at Starbucks: Building a Data-Driven Component Library',
		shortSubtitle: 'HR Apps & Design System',
		shortTitle: 'Starbucks',
	},
	{
		backgroundImage: 'vaccines.jpg',
		handle: 'wa-doh-vaccine-locator',
		longSubtitle:
			'Providing the public a user-friendly website to locate vaccines during a pivotal time in the Covid pandemic',
		longTitle: 'Lifesaving Solutions: Vaccine Finder for the WA Department of Health',
		shortSubtitle: 'Vaccine Locator',
		shortTitle: 'WA Department of Health',
	},
	{
		backgroundImage: 'golden-gate.jpg',
		handle: 'paragon',
		longSubtitle: 'Telling a story and adding life to a public-facing Bay Area real estate company website',
		longTitle: 'Elevating Luxury Real Estate: Animations and Immersive Interactions',
		shortSubtitle: 'Luxury Real Estate Website',
		shortTitle: 'Paragon',
	},
	{
		backgroundImage: 'biotech-lab.jpg',
		handle: 'astarte-inventory-management',
		longSubtitle: 'Modernizing the operations and data management system for a biotechnology company',
		longTitle: 'Streamlining Lab Operations: Custom Biotech Inventory Management',
		shortSubtitle: 'Biotech Inventory Management',
		shortTitle: 'Astarte Biologics',
	},
	{
		backgroundImage: 'houses.jpg',
		handle: 'paragon-property-management',
		longSubtitle: 'Centralizing data maintenance and inventory management into a custom internal website',
		longTitle: 'Empowering Efficiency: Developing Custom Real Estate Property Management Software',
		shortSubtitle: 'Property Management System',
		shortTitle: 'Paragon',
	},
	{
		backgroundImage: 'sketchbook.jpg',
		handle: 'high-seas-portfolio',
		longSubtitle: 'Showcasing the values and demonstrating the projects of a Bay Area consulting company',
		longTitle: 'Elevating Online Presence: Building a Dynamic Consulting Portfolio',
		shortSubtitle: 'Consulting Portfolio Website',
		shortTitle: 'High Seas',
	},
	{
		backgroundImage: 'vet.jpg',
		handle: 'mighty-vet-ux',
		longSubtitle: 'Creating concepts and prototypes for a knowledge-sharing and networking website',
		longTitle: 'Pioneering a Network: Designing an Online Community for Veterinarians',
		shortSubtitle: 'Online Veterinary Community',
		shortTitle: 'Mighty Vet',
	},
	{
		backgroundImage: 'camping.jpg',
		handle: 'wa-state-parks-camping-reservations',
		longSubtitle: 'Designing a user-centric platform to improve the reservation systems for WA State Parks',
		longTitle: 'Seamless Adventure Planning: Prototyping a Camping Reservation System',
		shortSubtitle: 'Camping Reservation System',
		shortTitle: 'WA State Parks',
	},
	{
		backgroundImage: 'portfolio.jpg',
		handle: 'ian-j-smith-portfolio',
		longSubtitle: 'My process for designing and building some of the features of this site',
		longTitle: 'Crafting a Personal Showcase: How I Made My Portfolio',
		shortSubtitle: "How It's Made",
		shortTitle: 'ianjsmith.com',
	},
]
