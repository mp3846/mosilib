import React from 'react'

export type ThemeType = 'light' | 'dark' | 'custom'

const Theme = ({ theme }: { theme: ThemeType }) => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'blue',
			color: 'white',
			fontSize: '2rem',
			gap: '1rem'
		}}>
		{theme}
	</div>
)

Theme.displayName = 'Theme'
export default Theme
