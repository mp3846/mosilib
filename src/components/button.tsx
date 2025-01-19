import React, { FC } from 'react'
import styles from './styles/button.module.css'
import { joiner } from '../utils'
import MDButton from '@mui/material/Button'

type Theme = 'simple' | '3D' | 'material'
type Variant = 'text' | 'outlined' | 'contained'

interface ButtonType {
	text: string
	theme?: Theme
	variant?: Variant
	className?: string
	containerClassName?: string
	onClick?: (...args: any[]) => void
}

const Button: FC<ButtonType> = ({
	text,
	theme = 'simple',
	variant,
	className,
	containerClassName,
	onClick = () => {},
	...props
}) => {
	const commonProps = {
		onClick,
		className: joiner(styles.button, styles['button-' + theme], className),
		...props
	}

	return (
		<div className={joiner(styles.container, containerClassName)}>
			{theme === 'material' && (
				<MDButton {...commonProps} variant={variant || 'text'}>
					{text}
				</MDButton>
			)}
			{theme !== 'material' && <button {...commonProps}>{text}</button>}
		</div>
	)
}

Button.displayName = 'Button'
export default Button
