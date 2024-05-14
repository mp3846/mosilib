import React, { FC, useId } from 'react'
import styles from './styles/switch.module.css'
import * as RXSwitch from '@radix-ui/react-switch'
import { joiner } from '../utils'

type SwitchType = {
	defaultChecked?: boolean
	checked: boolean
	onChange?: (checked: boolean) => void
	label?: string
	labelSide?: 'right' | 'left'
	mode?: 'simple' | '3D'
	className?: string
	disabled?: boolean
	required?: boolean
	name?: string
	value?: 'on' | 'off'
}

const Switch: FC<SwitchType> = ({
	defaultChecked = false,
	checked,
	onChange = () => {},
	disabled = false,
	required = false,
	name,
	className,
	value,
	label,
	labelSide = 'left',
	mode = 'simple'
}) => {
	const uniqueID = useId()
	return (
		<div
			className={styles.container}
			style={{ flexDirection: labelSide === 'left' ? 'row-reverse' : 'row' }}>
			<RXSwitch.Root
				id={uniqueID}
				name={name}
				disabled={disabled}
				required={required}
				value={value}
				className={joiner(styles.root, styles[`switch_${mode}`], className || '')}
				defaultChecked={defaultChecked}
				checked={checked}
				onCheckedChange={onChange}>
				<RXSwitch.Thumb className={joiner(styles.thumb, styles[`switch_${mode}`])} />
			</RXSwitch.Root>
			{label && (
				<label className={styles.label} htmlFor={uniqueID}>
					{label}
				</label>
			)}
		</div>
	)
}

Switch.displayName = 'Switch'
export default Switch
