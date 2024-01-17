const fs = require('fs/promises')
const projects = require('./app/data/projects.json')

const transformedData = projects.map((project) => {
	project.sections = project.sections.map((section) => {
		if (section.type === 'container') {
			const newSection = {
				...section,
			}

			section.content.forEach((c) => {
				if (c.title === 'Project Overview' || c.title === 'My Role' || c.title === 'Objectives') {
					if (newSection.type === 'container') {
						newSection.type = '2-column'
						newSection.content = {
							col1: [],
							col2: [],
						}
					}

					if (c.title === 'Project Overview' || c.title === 'My Role') {
						newSection.content.col1.push(c)
					}

					if (c.title === 'Objectives') newSection.content.col2.push(c)
				}
			})

			return newSection
		}

		return section
	})
	return project
})

fs.writeFile('./projects-2.json', JSON.stringify(transformedData, null, 4), (err) => {
	if (err) return console.error('ERROR:', err)

	console.log('Write file success!')
})
