/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dank: {
					900: '#160E25',
					600: '#1c1332',
					500: '#231c41',
					300: '#2d223f',
					100: '#201a4f'
				}
			}
		},
	},
	plugins: [],
}
