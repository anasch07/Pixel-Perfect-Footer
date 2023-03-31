/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#1E2641',
				twitterBlue: '#4297C4',
				facebookBlue: '#4C6EA7',
				inputBorder: '#6178C7',
				specialWhite: '#F1F2FC',
				white: '#FFFFFF',
				instagramGradient:
					'bg-gradient-to-bl from-[#FFB73D] via-[#C47067] to-[#9D23E4]',
			},
			borderRadius: {
				footerRadius: '15px',
				buttonRadius: '5px',
				iconRadius: '3px',
			},
			fontFamily: {
				merriweather: ['var(--merriweather)'],
				ibm_plex_sans: ['var(--IBM-Plex-Sans)'],
			},
		},
	},
	plugins: [],
};
