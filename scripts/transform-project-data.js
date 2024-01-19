// Helper script to run to transform and manipulate all project data structure

const fs = require('fs/promises')
const projects = require('../app/data/projects.json')

const transformedData = projects.map((project) => {
	project.sections = project.sections.map((section) => {
		if (section.type === 'container') {
			const col1 = []
			const col2 = []
			section.blocks.forEach((block) => {
				if (block.title === 'Reflection') col1.push(block)
				if (block.title === 'Lessons Learned' || block.title === 'Future Recommendations') col2.push(block)
			})

			if (col1.length || col2.length) {
				section.blocks = [
					{
						type: 'two-column',
						content: {
							col1,
							col2,
						},
					},
				]
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
