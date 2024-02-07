'use client'

import Button from '@/lib/Button'
import Markdown from './Markdown'
import { useEffect, useState } from 'react'
import CloseIcon from '@/lib/CloseIcon'

export default function FeedbackSurvey() {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const handleClose = () => setIsVisible(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsVisible(true)
		}, 2000)

		return () => clearTimeout(timeout)
	}, [])

	return isVisible ? (
		<div className="animate-fade-in max-w-sm md:max-w-xs fixed left-4 md:left-auto bottom-4 right-4 bg-teal-100 dark:bg-grey-blue-800 p-4 rounded-lg shadow-xl flex flex-col">
			<Button
				aria-label="Close survey popup"
				className="absolute top-1 right-0"
				onClick={handleClose}
				size="small"
				variant="ghost"
			>
				<CloseIcon className="w-5" />
			</Button>
			<h2 className="font-medium text-xl mb-2">Hey There!</h2>
			<Markdown
				className="text-sm mb-4"
				text="Do you have a few minutes to share some feedback on your
				experience using my portfolio website?"
			/>
			<div className="flex justify-end gap-2">
				<Button onClick={handleClose} variant="outline">
					Maybe later
				</Button>
				<Button href="https://forms.gle/67Ya87ix3x4TJEer6" target="_blank">
					Yes, sure!
				</Button>
			</div>
		</div>
	) : null
}
