const fs = require('fs/promises')
const projects = require('./app/data/projects.json')

const transformedData = projects.map((project) => {
	const splitTitle = project.longTitle.split(': ')
	const title = {
		long: {
			text: splitTitle[0],
			subtitle: splitTitle[1],
		},
		short: {
			text: project.shortTitle,
			subtitle: project.shortSubtitle,
		},
	}

	return {
		title,
		backgroundImage: project.backgroundImage,
		bgColor: project.bgColor,
		coverImage: project.coverImage,
		description: project.longSubtitle,
		handle: project.handle,
		sections: project.sections,
		website: project.website,
	}
})

fs.writeFile('./projects-2.json', JSON.stringify(transformedData, null, 4), (err) => {
	if (err) return console.error('ERROR:', err)

	console.log('Write file success!')
})
