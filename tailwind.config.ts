import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx,json}',
	],
	darkMode: 'class',
	future: {
		hoverOnlyWhenSupported: true,
	},
	safelist: [
		'delay-[200ms]',
		'delay-[400ms]',
		'delay-[600ms]',
		'delay-[800ms]',
		'delay-[1000ms]',
		'delay-[1200ms]',
		'delay-[1400ms]',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000000',
			white: '#ffffff',
			red: {
				'50': '#fff1f2',
				'100': '#ffe3e5',
				'200': '#ffccd1',
				'300': '#ffa2ad',
				'400': '#fe6e81',
				'500': '#f95670',
				DEFAULT: '#f95670',
				'600': '#e51944',
				'700': '#c20e38',
				'800': '#a20f36',
				'900': '#8b1035',
				'950': '#4e0317',
			},
			orange: {
				'50': '#fef5f2',
				'100': '#fde9e3',
				'200': '#fcd7cc',
				'300': '#f9baa8',
				'400': '#f1805f',
				DEFAULT: '#f1805f',
				'500': '#e96e4a',
				'600': '#d5532d',
				'700': '#b34322',
				'800': '#943a20',
				'900': '#7b3521',
				'950': '#43180c',
			},
			yellow: {
				'50': '#fdfce9',
				'100': '#fbfbc6',
				'200': '#f8f27b',
				DEFAULT: '#f8f27b',
				'300': '#f5e74f',
				'400': '#f0d51f',
				'500': '#e0bd12',
				'600': '#c2940c',
				'700': '#9a6b0e',
				'800': '#805513',
				'900': '#6d4516',
				'950': '#3f2409',
			},
			green: {
				'50': '#f5f9f4',
				'100': '#ebf1e7',
				'200': '#d6e3cf',
				'300': '#b4cca9',
				'400': '#7ea46c',
				DEFAULT: '#7ea46c',
				'500': '#6a8f58',
				'600': '#547445',
				'700': '#435d38',
				'800': '#394b30',
				'900': '#2f3e29',
				'950': '#172013',
			},
			teal: {
				'50': '#effcfc',
				'100': '#d6f7f7',
				'200': '#b2eeef',
				DEFAULT: '#b2eeef',
				'300': '#5fd9dd',
				'400': '#40c9d0',
				'500': '#25acb5',
				'600': '#218c99',
				'700': '#21717d',
				'800': '#235d67',
				'900': '#214e58',
				'950': '#11333b',
			},
			blue: {
				'50': '#f1f6fd',
				'100': '#dfeafa',
				'200': '#c7dbf6',
				'300': '#a0c4f0',
				'400': '#659ae4',
				DEFAULT: '#659ae4',
				'500': '#5384de',
				'600': '#3e67d2',
				'700': '#3555c0',
				'800': '#30479d',
				'900': '#2c3f7c',
				'950': '#1f284c',
			},
			'dark-blue': {
				'50': '#f1f8fd',
				'100': '#dfeffa',
				'200': '#c6e4f7',
				'300': '#a0d2f0',
				'400': '#72b9e8',
				'500': '#519de0',
				'600': '#3d83d3',
				'700': '#336fc2',
				'800': '#2f5a9e',
				'900': '#274672',
				DEFAULT: '#274672',
				'950': '#1e304d',
			},
			'grey-blue': {
				'50': '#f2f4fc',
				'100': '#e2e7f7',
				'200': '#ccd5f1',
				'300': '#a9bbe7',
				'400': '#7f97db',
				'500': '#6177d0',
				'600': '#4d5cc3',
				'700': '#434cb2',
				'800': '#3b4092',
				'900': '#343974',
				'950': '#2b2d57',
				DEFAULT: '#2b2d57',
			},
			purple: {
				'50': '#fbf7fd',
				'100': '#f5edfa',
				'200': '#ecddf7',
				'300': '#dec3ef',
				'400': '#c99ce4',
				'500': '#b578d7',
				DEFAULT: '#b578d7',
				'600': '#9f58c5',
				'700': '#8945ab',
				'800': '#733c8d',
				'900': '#5d3271',
				'950': '#401a51',
			},
			indigo: {
				'50': '#eef4ff',
				'100': '#e1ebfe',
				'200': '#c8d9fd',
				'300': '#a7bffa',
				'400': '#849cf5',
				'500': '#6779ed',
				'600': '#4a54e1',
				'700': '#3c43c6',
				'800': '#333aa0',
				'900': '#30377f',
				'950': '#151737',
				DEFAULT: '#151737',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
			},
		},
		extend: {
			animation: {
				'scale-up-down': 'scale-up-down 1050ms infinite ease-in-out',
			},
			fontFamily: {
				sans: ['scandia-web', 'sans-serif'],
			},
			keyframes: {
				'scale-up-down': {
					'0%, 40%, 100%': {
						transform: 'scaleY(0.1)',
					},
					'20%': {
						transform: 'scaleY(1.0)',
					},
				},
			},
			strokeWidth: {
				4: '4px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'animate-delay': (value) => ({
						animationDelay: value,
					}),
				},
				{ values: theme('transitionDelay') }
			)
		}),
	],
}
export default config
