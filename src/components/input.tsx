import React, { FC, useId } from 'react'
import styles from './styles/input.module.css'
import { joiner } from '../utils'

type InputType = {
	onChange?: (...args: any[]) => void
	label?: string
	labelSide?: 'right' | 'left'
	theme?: 'simple' | '3D'
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
	return (
		<div
			className={joiner(styles.container, containerClassName)}
			style={{ flexDirection: labelSide === 'left' ? 'row-reverse' : 'row' }}>
			<input
				id={uniqueID}
				name={name}
				disabled={disabled}
				required={required}
				value={value}
				placeholder={placeholder}
				className={joiner(styles.input, styles[`input_${theme}`], className)}
				onChange={onChange}
			/>
			{label && (
				<label className={styles.label} htmlFor={uniqueID}>
					{label}
				</label>
			)}
		</div>
	)
}

Input.displayName = 'Input'
export default Input
