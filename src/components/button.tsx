import React, { FC } from 'react'
import styles from './styles/button.module.css'
import { joiner } from '../utils'

type ButtonType = {
	text: string
	className?: string
}

const Button: FC<ButtonType> = ({ text, className, ...props }) => (
	<div className={styles.container}>
		<button className={joiner(styles.button, className || '')} {...props}>
			{text}
		</button>
	</div>
)

Button.displayName = 'Button'
export default Button
