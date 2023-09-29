/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			mobile: '350px',
			ipad: '550px',
			tablet: '800px',
			laptop: '1000px',
			computer: '1200px',
			medium: '1500px',
			large: '1900px',
		},
		extend: {},
	},
	plugins: [],
};
