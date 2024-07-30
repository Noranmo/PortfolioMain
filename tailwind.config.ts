import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		screens: {
			xs: '540px',
			dm: '900px',
			mdd: '1080px',
			mddd: '1130px',
			xlll: '1225px',
			xll: '1350px',
			dxx: '1620px',
			dx: '1930px',
			...defaultTheme.screens,
		},
	},
	plugins: [],
}
export default config
