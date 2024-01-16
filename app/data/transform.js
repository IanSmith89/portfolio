const fs = require('fs/promises')
const projects = require('./projects.json')

const transformedData = projects.map((project) => {
	project.sections = project.sections.map((section) => {
		if (section.type === 'container') {
			section.content = section.content.map((sectionContent) => {
				if (sectionContent.type === 'list') {
					sectionContent.content = sectionContent.content.map((x) => {
						return `**${x.title}:** ${x.detail}`
					})
				}
				return sectionContent
			})
		}
		return section
	})
	return project
})

fs.writeFile('./projects-2.json', JSON.stringify(transformedData, null, 4), (err) => {
	if (err) return console.error('ERROR:', err)

	console.log('Write file success!')
})
