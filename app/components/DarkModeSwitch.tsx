'use client'

import { useTheme } from 'next-themes'
import { useState } from 'react'

export default function DarkModeSwitch() {
	const { systemTheme, theme, setTheme } = useTheme()
	const currentTheme = theme === 'system' ? systemTheme : theme
	const isDarkMode = currentTheme == 'dark'

	const handleClick = () => setTheme(isDarkMode ? 'light' : 'dark')

	return (
		<>
			<input
				checked={isDarkMode}
				onChange={handleClick}
				type="checkbox"
				id="dark-mode-switch"
				className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer ease-in-out duration-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
			/>
			<label htmlFor="dark-mode-switch" className="sr-only">
				dark mode switch
			</label>
		</>
	)
}
