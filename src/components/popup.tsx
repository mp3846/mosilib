import React from 'react'

export interface PopupType {
	title: string
	content: string
}

const Popup = ({ title, content }: PopupType) => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'purple',
			color: 'white',
			fontSize: '2rem',
			gap: '1rem'
		}}>
		<div>{title}</div>
		<div>{content}</div>
	</div>
)

Popup.displayName = 'Popup'
export default Popup
