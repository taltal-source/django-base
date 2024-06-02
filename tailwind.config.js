module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	content: ['./**/templates/*.html', './**/templates/**/*.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Noto Sans JP',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'
				],
				serif: ['Noto Serif JP', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
			},
			minHeight: {
				'1/2': '50%',
				'1/3': '33%',
				'2/3': '66%',
				'1/4': '25%',
				'2/4': '50%',
				'3/4': '75%',
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
				'1/6': '16.6666667%',
				'2/6': '33.3333333%',
				'3/6': '50%',
				'4/6': '66.6666667%',
				'5/6': '83.3333333%'
			},
			spacing: {
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
				'1/6': '16.6666667%',
				'2/6': '33.3333333%',
				'3/6': '50%',
				'4/6': '66.6666667%',
				'5/6': '83.3333333%'
			},
			colors: {
				'sample': '#FFFFFF',
			}
		}
	},
	variants: {},
	plugins: []
};
