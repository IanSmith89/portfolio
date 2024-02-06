'use client'

import { useCallback, useMemo } from 'react'
import { useTheme } from 'next-themes'
import Switch from '@/lib/Switch'
import SunIcon from '@/lib/SunIcon'
import MoonIcon from '@/lib/MoonIcon'

export default function DarkModeSwitch() {
	const { systemTheme, theme, setTheme } = useTheme()
	const currentTheme = theme === 'system' ? systemTheme : theme

	const isDarkMode = useMemo<boolean>(() => currentTheme === 'dark', [currentTheme])

	const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
		(e) => {
			setTheme(e.currentTarget.checked ? 'dark' : 'light')
		},
		[setTheme]
	)

	return (
		<div className="flex items-center gap-2">
			<SunIcon className="fill-orange dark:fill-white dark:opacity-20" />
			<Switch
				checked={isDarkMode}
				id="dark-mode-switch"
				label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
				onChange={handleChange}
			/>
			<MoonIcon className="fill-black opacity-20 dark:fill-yellow dark:opacity-100" />
		</div>
	)
}
