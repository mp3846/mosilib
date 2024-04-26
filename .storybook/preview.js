/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		backgrounds: {
			default: 'light-gray',
			values: [
				{
					name: 'dark',
					value: '#00000090'
				},
				{
					name: 'light-gray',
					value: '#00000010'
				}
			]
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
