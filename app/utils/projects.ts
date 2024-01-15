export type TextBlock = {
	content: string[]
	title: string
	type: 'text'
}

export type ListItem = {
	detail: string
	title: string
}

export type ListBlock = {
	content: ListItem[]
	title: string
	type: 'list'
}

export type ContainerProjectSection = {
	background: 'light' | 'dark'
	type: 'container'
	content: (TextBlock | ListBlock)[]
}

export type HeaderProjectSection = {
	type: 'header'
	title: string
}

export type Project = {
	backgroundImage: string
	handle: string
	longSubtitle?: string
	longTitle?: string
	sections?: (ContainerProjectSection | HeaderProjectSection)[]
	shortSubtitle?: string
	shortTitle: string
}

export const PROJECTS_URL: string = '/projects'

export const PROJECTS: Project[] = [
	{
		backgroundImage: 'cyclists.jpg',
		handle: 'tpc-rebrand',
		longSubtitle: 'Leading the technical efforts to rebrand, optimize, and modernize the TPC e-commerce website',
		longTitle: 'Rebranding TPC: A Lesson in Engineering Leadership',
		sections: [
			{
				background: 'light',
				type: 'container',
				content: [
					{
						type: 'text',
						title: 'Project Overview',
						content: [
							'I had the privilege of leading the implementation of a significant redesign for the public-facing e-commerce website of TPC, the industry leader in buying and selling used bikes. The primary goal was to enhance the user experience, improve performance, and modernize the overall look and feel of the site.',
						],
					},
					{
						type: 'list',
						title: 'Objectives',
						content: [
							{
								title: 'Enhanced User Experience',
								detail: 'Improve navigation, product discovery, and overall satisfaction for online shoppers.',
							},
							{
								title: 'Performance Optimization',
								detail: 'Enhance website speed and responsiveness for a seamless user experience.',
							},
							{
								title: 'Modernization',
								detail: 'Redesign the user interface to align with contemporary design trends and the brand image.',
							},
						],
					},
					{
						type: 'text',
						title: 'My Role',
						content: [
							'As the frontend engineering lead, my responsibilities encompassed overseeing the entire frontend development process, collaborating with our design and product teams, and ensuring the successful implementation of the redesigned website while continuing to release new features and product updates.',
						],
					},
				],
			},
			{
				background: 'dark',
				type: 'container',
				content: [
					{
						type: 'list',
						title: 'Challenges',
						content: [
							{
								title: 'Outdated User Interface',
								detail: "The existing website had an outdated design that didn't resonate with the company's progressive image.",
							},
							{
								title: 'Suboptimal User Journey',
								detail: 'Users faced difficulties navigating and finding products efficiently.',
							},
							{
								title: 'Performance Concerns',
								detail: 'Load times were inconsistent, impacting the overall user experience.',
							},
						],
					},
				],
			},
			{
				type: 'header',
				title: 'Solution',
			},
			{
				background: 'light',
				type: 'container',
				content: [
					{
						type: 'list',
						title: 'Key Features',
						content: [
							{
								title: 'Streamlined Navigation',
								detail: 'Implemented a simplified menu structure for easier navigation.',
							},
							{
								title: 'Enhanced Product Pages',
								detail: 'Improved layout and presentation of product information for a better user experience.',
							},
							{
								title: 'Responsive Design',
								detail: 'Ensured a seamless experience across various devices.',
							},
						],
					},
					{
						type: 'list',
						title: 'Technology Highlights',
						content: [
							{
								title: '#1',
								detail: 'Foo',
							},
							{
								title: '#2',
								detail: 'Bar',
							},
							{
								title: '#3',
								detail: 'Baz',
							},
						],
					},
				],
			},
			{
				type: 'header',
				title: 'Results & Impact',
			},
			{
				background: 'light',
				type: 'container',
				content: [
					{
						type: 'list',
						title: 'Metrics',
						content: [
							{
								title: 'Page Load Time',
								detail: 'Reduced by 40%, contributing to a significant improvement in bounce rates.',
							},
							{
								title: 'Conversion Rate',
								detail: 'Increased by 25% within the first month post-launch.',
							},
							{
								title: 'Mobile Traffic',
								detail: 'Saw a 20% increase, indicating improved mobile responsiveness.',
							},
						],
					},
					{
						type: 'text',
						title: 'Impact',
						content: [
							'The redesign not only met but exceeded the project objectives, resulting in a more engaging and efficient e-commerce platform.',
						],
					},
				],
			},
			{
				background: 'dark',
				type: 'container',
				content: [
					{
						type: 'text',
						title: 'Reflection',
						content: [
							'The successful implementation of this project reinforced the importance of collaboration between design and development teams. It highlighted the value of user feedback throughout the development process.',
						],
					},
					{
						type: 'text',
						title: 'Lessons Learned',
						content: [
							'Overcoming technical challenges related to performance optimization taught us the importance of balancing aesthetic improvements with maintaining a fast and efficient website.',
						],
					},
					{
						type: 'text',
						title: 'Future Recommendations',
						content: [
							'For future projects, I recommend continuous user testing throughout development and increased focus on mobile-first design principles to adapt to evolving user preferences.',
						],
					},
				],
			},
		],
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
			'Providing all Washingtonians a user-friendly website to locate vaccines during a pivotal time in the Covid pandemic',
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
