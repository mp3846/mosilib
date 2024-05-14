import React, { FC, useId } from 'react'
import styles from './styles/checkbox.module.css'
import * as RXCheckbox from '@radix-ui/react-checkbox'
import { joiner } from '../utils'
import { LuCheck } from 'react-icons/lu'

type CheckedState = boolean | 'indeterminate'

type CheckboxType = {
	defaultChecked?: boolean
	checked: boolean
	onChange?: (checked: CheckedState) => void
	label?: string
	labelSide?: 'right' | 'left'
	disabled?: boolean
	required?: boolean
	name?: string
	value?: 'on' | 'off'
	mode?: 'simple' | 'fill'
	className?: string
}

const Checkbox: FC<CheckboxType> = ({
	defaultChecked = false,
	checked,
	onChange = () => {},
	label,
	labelSide = 'left',
	className,
	disabled = false,
	required = false,
	name,
	value,
	mode = 'simple'
}) => {
	const uniqueID = useId()
	return (
		<div
			className={styles.container}
			style={{ flexDirection: labelSide === 'left' ? 'row-reverse' : 'row' }}>
			<RXCheckbox.Root
				id={uniqueID}
				name={name}
				disabled={disabled}
				required={required}
				value={value}
				className={joiner(styles.root, className || '')}
				defaultChecked={defaultChecked}
				checked={checked}
				onCheckedChange={onChange}>
				<RXCheckbox.Indicator className={joiner(styles.indicator, styles[mode])}>
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
