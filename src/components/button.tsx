import React, { FC } from 'react'
import styles from './styles/button.module.css'
import { joiner } from '../utils'

type ButtonType = {
	text: string
	theme?: 'simple' | '3D'
	className?: string
	containerClassName?: string
	onClick?: (...args: any[]) => void
}

const Button: FC<ButtonType> = ({
	text,
	theme = 'simple',
	className,
	containerClassName,
	onClick = () => {},
	...props
}) => (
	<div className={joiner(styles.container, containerClassName)}>
		<button
			onClick={onClick}
			className={joiner(styles.button, styles['button-' + theme], className)}
			{...props}>
			{text}
		</button>
	</div>
)

Button.displayName = 'Button'
export default Button
