/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'purple': '#3f3cbb',
			'midnight': '#121063',
			'metal': '#565584',
		},
		keyframes: {
			scaleUp: {
				'0%': { transform: 'scale(1)' },
				'50%': { transform: 'scale(1.01)' },
				'100%': { transform: 'scale(1)' },
			}

		}
	},
	plugins: [
		require('flowbite/plugin')
	]
}
