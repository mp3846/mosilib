import React, { FC, useId } from 'react'
import styles from './styles/switch.module.css'
import * as RXSwitch from '@radix-ui/react-switch'
import { joiner } from '../utils'

type Theme = 'simple' | '3D'

type SwitchType = {
	defaultChecked?: boolean
	checked: boolean
	onChange?: (checked: boolean) => void
	label?: string
	labelSide?: 'right' | 'left'
	theme?: Theme
	className?: string
	containerClassName?: string
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
	containerClassName,
	value,
	label,
	labelSide = 'left',
	theme = 'simple'
}) => {
	const uniqueID = useId()
	return (
		<div
			className={joiner(styles.container, containerClassName)}
			style={{ flexDirection: labelSide === 'left' ? 'row-reverse' : 'row' }}>
			<RXSwitch.Root
				id={uniqueID}
				name={name}
				disabled={disabled}
				required={required}
				value={value}
				className={joiner(styles.root, styles[`switch_${theme}`], className)}
				defaultChecked={defaultChecked}
				checked={checked}
				onCheckedChange={onChange}>
				<RXSwitch.Thumb className={joiner(styles.thumb, styles[`switch_${theme}`])} />
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
