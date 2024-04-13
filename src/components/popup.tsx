import React from 'react'
import styles from '../styles/popup.module.css'

export interface PopupType {
	title: string
	content: string
}

const Popup = ({ title, content }: PopupType) => (
	<div className={styles.container}>
		<div>{title}</div>
		<div>{content}</div>
	</div>
)

Popup.displayName = 'Popup'
export default Popup
