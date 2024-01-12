'use client'

import { useTheme } from 'next-themes'
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'

export default function DarkModeSwitch() {
	const { systemTheme, theme, setTheme } = useTheme()
	const currentTheme = theme === 'system' ? systemTheme : theme
	const isDarkMode = currentTheme == 'dark'

	const handleChange = () => setTheme(isDarkMode ? 'light' : 'dark')

	return (
		<div className="flex items-center gap-2">
			<SunIcon className="fill-orange dark:fill-white dark:opacity-20" />
			<input
				checked={isDarkMode}
				onChange={handleChange}
				type="checkbox"
				id="dark-mode-switch"
				className="relative w-11 h-6 py-0.5 border-0 text-transparent rounded-full cursor-pointer pl-1 dark:pl-[7px] bg-white/60 dark:checked:bg-white/40 dark:checked:bg-none dark:checked:hover:bg-white/40 dark:checked:focus:bg-white/40 focus:ring-transparent focus:ring-offset-0
                
                before:inline-block before:w-4 before:h-4 before:bg-orange before:translate-x-0 dark:before:translate-x-full before:rounded-full before:transform before:transition before:ease-in-out before:duration-200 dark:before:bg-yellow"
			/>
			<label htmlFor="dark-mode-switch" className="sr-only">
				Switch to {isDarkMode ? 'light' : 'dark'} mode
			</label>
			<MoonIcon className="fill-black opacity-20 dark:fill-yellow dark:opacity-100" />
		</div>
	)
}
