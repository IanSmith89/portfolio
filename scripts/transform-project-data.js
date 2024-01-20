// Helper script to run to transform and manipulate all project data structure

const fs = require('fs/promises')
const projects = require('../app/data/projects.json')

const transformedData = projects.map((project) => {
	project.sections = project.sections.map((section) => {
		if (section.type === 'container') {
			let center
			section.blocks.forEach((block) => {
				if (block.title === 'Metrics') center = true
			})

			if (center) {
				return {
					background: section.background,
					type: section.type,
					center: true,
					blocks: section.blocks,
				}
			}
		}

		return section
	})

	return project
})

fs.writeFile('./scripts/projects-2.json', JSON.stringify(transformedData, null, 4), (err) => {
	if (err) return console.error('ERROR:', err)

	console.log('Write file success!')
})
