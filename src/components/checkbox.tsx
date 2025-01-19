import React, { FC, useId } from 'react'
import styles from './styles/checkbox.module.css'
import * as RXCheckbox from '@radix-ui/react-checkbox'
import { joiner } from '../utils'
import { LuCheck } from 'react-icons/lu'

type Theme = 'simple' | 'fill' | 'material'

type CheckboxType = {
	defaultChecked?: boolean
	checked: boolean
	onChange?: (checked: boolean) => void
	label?: string
	labelSide?: 'right' | 'left'
	disabled?: boolean
	required?: boolean
	name?: string
	value?: 'on' | 'off'
	theme?: Theme
	className?: string
	containerClassName?: string
}

const Checkbox: FC<CheckboxType> = ({
	defaultChecked = false,
	checked,
	onChange = () => {},
	label,
	labelSide = 'left',
	className,
	containerClassName,
	disabled = false,
	required = false,
	name,
	value,
	theme = 'simple'
}) => {
	const uniqueID = useId()
	return (
		<div
			className={joiner(styles.container, containerClassName)}
			style={{ flexDirection: labelSide === 'left' ? 'row-reverse' : 'row' }}>
			<RXCheckbox.Root
				id={uniqueID}
				name={name}
				disabled={disabled}
				required={required}
				value={value}
				className={joiner(styles.root, className)}
				defaultChecked={defaultChecked}
				checked={checked}
				onCheckedChange={(checkedState) => onChange(!!checkedState)}>
				<RXCheckbox.Indicator className={joiner(styles.indicator, styles[theme])}>
					<LuCheck />
				</RXCheckbox.Indicator>
			</RXCheckbox.Root>
			{label && (
				<label className={styles.label} htmlFor={uniqueID}>
					{label}
				</label>
			)}
		</div>
	)
}

Checkbox.displayName = 'Checkbox'
export default Checkbox
