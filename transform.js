const fs = require('fs/promises')
const projects = require('./app/data/projects.json')

const transformedData = projects.map((project) => {
	project.sections = project.sections.map((section) => {
		if (section.type === 'two-column') {
			const newSection = { ...section }
			newSection.type = 'container'
			newSection.content = {}
			newSection.content.type = 'two-column'
			newSection.content.content = section.content
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
