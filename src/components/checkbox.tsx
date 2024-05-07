import React, { FC } from 'react'
import styles from './styles/checkbox.module.css'
import * as RXCheckbox from '@radix-ui/react-checkbox'
import { joiner } from '../utils'
import { LuCheck } from 'react-icons/lu'

type CheckedState = boolean | 'indeterminate'

type CheckboxType = {
	defaultChecked?: boolean
	checked: boolean
	onChange?: (checked: CheckedState) => void
	label: string
	mode?: 'simple' | 'fill'
	className?: string
}

const Checkbox: FC<CheckboxType> = ({
	defaultChecked = false,
	checked,
	onChange = () => {},
	label,
	className,
	mode = 'simple'
}) => (
	<div className={styles.container}>
		<RXCheckbox.Root
			id='c1'
			className={joiner(styles.root, className || '')}
			defaultChecked={defaultChecked}
			checked={checked}
			onCheckedChange={onChange}>
			<RXCheckbox.Indicator className={joiner(styles.indicator, styles[mode])}>
				<LuCheck />
			</RXCheckbox.Indicator>
		</RXCheckbox.Root>
		<label className={styles.label} htmlFor='c1'>
			{label}
		</label>
	</div>
)

Checkbox.displayName = 'Checkbox'
export default Checkbox
