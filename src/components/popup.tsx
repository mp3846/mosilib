import React from 'react'

export interface PopupType {
	title: string
	content: string
	mode?: 'toast' | 'warning' | 'error'
	confirmText?: string
	onConfirm?: () => void
}

const Popup = ({
	title = 'title',
	content = 'content',
	mode = 'toast',
	confirmText = 'Confirm',
	onConfirm = () => {}
}: PopupType) => (
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
		<button onClick={onConfirm}>{confirmText}</button>
	</div>
)

Popup.displayName = 'Popup'
export default Popup
