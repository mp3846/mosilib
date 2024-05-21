import React, { FC, useId } from 'react'
import styles from './styles/input.module.css'
import { joiner } from '../utils'

type InputType = {
	onChange?: (...args: any[]) => void
	label?: string
	labelSide?: 'right' | 'left'
	mode?: 'simple' | '3D'
	className?: string
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
	label,
	labelSide = 'left',
	value,
	placeholder,
	mode = 'simple'
}) => {
	const uniqueID = useId()
	return (
		<div
			className={styles.container}
			style={{ flexDirection: labelSide === 'left' ? 'row-reverse' : 'row' }}>
			<input
				id={uniqueID}
				name={name}
				disabled={disabled}
				required={required}
				value={value}
				placeholder={placeholder}
				className={joiner(styles.input, styles[`input_${mode}`], className)}
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
