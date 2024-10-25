/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				teal: {
					500: '#14b8a6',
					600: '#0d9488'
				}
			}
		},
	},
	plugins: [],
}
