import React, { FC } from 'react'
import styles from './styles/switch.module.css'
import * as RXSwitch from '@radix-ui/react-switch'
import { joiner } from '../utils'

type SwitchType = {
	defaultChecked?: boolean
	checked: boolean
	onChange?: (checked: boolean) => void
	label: string
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
	mode = 'simple'
}) => (
	<div className={styles.container}>
		<RXSwitch.Root
			id='s1'
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
		<label className={styles.label} htmlFor='s1'>
			{label}
		</label>
	</div>
)

Switch.displayName = 'Switch'
export default Switch
