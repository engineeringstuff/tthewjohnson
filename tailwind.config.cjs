const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				hyperlegible: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
