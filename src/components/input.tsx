import React, { FC, useId } from 'react'
import styles from './styles/input.module.css'
import { joiner } from '../utils'
import { TextField } from '@mui/material'

type Theme = 'simple' | '3D' | 'material'

type InputType = {
	onChange?: (...args: any[]) => void
	label?: string
	labelSide?: 'right' | 'left'
	theme?: Theme
	className?: string
	containerClassName?: string
	disabled?: boolean
	required?: boolean
	name?: string
	value?: string | number
	placeholder?: string
}

const Input: FC<InputType> = ({
	onChange = () => {},
	disabled = false,
	required = false,
	name,
	className,
	containerClassName,
	label,
	labelSide = 'left',
	value,
	placeholder,
	theme = 'simple'
}) => {
	const uniqueID = useId()

	const commonProps = {
		id: uniqueID,
		name,
		disabled,
		required,
		value,
		className: joiner(styles.input, styles[`input_${theme}`], className),
		onChange
	}

	return (
		<div
			className={joiner(styles.container, containerClassName)}
			style={{ flexDirection: labelSide === 'left' ? 'row-reverse' : 'row' }}>
			{theme === 'material' && (
				<TextField label={placeholder} variant='outlined' {...commonProps} />
			)}
			{theme !== 'material' && (
				<>
					<input {...commonProps} placeholder={placeholder} />
					{label && (
						<label className={styles.label} htmlFor={uniqueID}>
							{label}
						</label>
					)}
				</>
			)}
		</div>
	)
}

Input.displayName = 'Input'
export default Input
