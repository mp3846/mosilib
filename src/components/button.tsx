import React, { FC } from 'react'
import styles from './styles/button.module.css'
import { joiner } from '../utils'

type ButtonType = {
	text: string
	mode: 'simple' | '3D'
	className?: string
}

const Button: FC<ButtonType> = ({ text, mode, className, ...props }) => (
	<div className={styles.container}>
		<button
			className={joiner(styles.button, styles['button-' + mode], className || '')}
			{...props}>
			{text}
		</button>
	</div>
)

Button.displayName = 'Button'
export default Button
