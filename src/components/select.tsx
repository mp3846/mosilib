import React, { FC, useId } from 'react'
import styles from './styles/select.module.css'
import { joiner } from '../utils'
import ReactSelect from 'react-select'

type SelectType = {
	onChange?: (newValue: any) => void
	label?: string
	labelSide?: 'right' | 'left'
	mode?: 'simple' | '3D'
	className?: string
	disabled?: boolean
	required?: boolean
	name?: string
	rtl?: boolean
	isClearable?: boolean
	autoFocus?: boolean
	noOptionsText?: string
	placeholder?: string
	value?: any
	defaultValue?: any
	defaultInputValue?: any
	options?: Array<{ label: string; value: any }>
	containerStyles?: any
	controlStyles?: any
	menuStyles?: any
	menuListStyles?: any
	inputStyles?: any
	placeholderStyles?: any
	optionStyles?: any
	groupStyles?: any
	indicatorsContainerStyles?: any
	indicatorSeparatorStyles?: any
	dropdownIndicatorStyles?: any
	loadingIndicatorStyles?: any
	clearIndicatorStyles?: any
	groupHeadingStyles?: any
	loadingMessageStyles?: any
	menuPortalStyles?: any
	noOptionsMessageStyles?: any
	valueContainerStyles?: any
	singleValueStyles?: any
	multiValueStyles?: any
	multiValueLabelStyles?: any
	multiValueRemoveStyles?: any
}

const extendBase = (newStyles: any) => (base: any) => ({ ...base, ...newStyles })

const Select: FC<SelectType> = ({
	onChange = () => {},
	disabled = false,
	required = false,
	isClearable = true,
	name,
	rtl,
	autoFocus,
	noOptionsText,
	className,
	placeholder,
	value,
	defaultValue,
	defaultInputValue,
	options,
	label,
	labelSide = 'left',
	mode = 'simple',
	containerStyles,
	controlStyles,
	inputStyles,
	menuStyles,
	menuListStyles,
	placeholderStyles,
	optionStyles,
	groupStyles,
	indicatorsContainerStyles,
	indicatorSeparatorStyles,
	clearIndicatorStyles,
	loadingIndicatorStyles,
	dropdownIndicatorStyles,
	groupHeadingStyles,
	loadingMessageStyles,
	menuPortalStyles,
	noOptionsMessageStyles,
	valueContainerStyles,
	singleValueStyles,
	multiValueStyles,
	multiValueLabelStyles,
	multiValueRemoveStyles,
	...props
}) => {
	const uniqueID = useId()
	const uniqueInstanceID = useId()
	return (
		<div
			className={styles.container}
			style={{ flexDirection: labelSide === 'left' ? 'row-reverse' : 'row' }}>
			<ReactSelect
				inputId={uniqueID}
				instanceId={uniqueInstanceID}
				placeholder={placeholder}
				value={value}
				defaultValue={defaultValue}
				defaultInputValue={defaultInputValue}
				options={options}
				name={name}
				isRtl={rtl}
				isClearable={isClearable}
				autoFocus={autoFocus}
				noOptionsMessage={() => noOptionsText}
				isDisabled={disabled}
				required={required}
				onChange={onChange}
				className={joiner(styles.select, styles[`select_${mode}`], className || '')}
				styles={{
					container: extendBase(containerStyles),
					control: extendBase(controlStyles),
					menu: extendBase(menuStyles),
					menuList: extendBase(menuListStyles),
					input: extendBase(inputStyles),
					placeholder: extendBase(placeholderStyles),
					option: extendBase(optionStyles),
					group: extendBase(groupStyles),
					indicatorSeparator: extendBase(indicatorSeparatorStyles),
					clearIndicator: extendBase(clearIndicatorStyles),
					loadingIndicator: extendBase(loadingIndicatorStyles),
					dropdownIndicator: extendBase(dropdownIndicatorStyles),
					indicatorsContainer: extendBase(indicatorsContainerStyles),
					groupHeading: extendBase(groupHeadingStyles),
					loadingMessage: extendBase(loadingMessageStyles),
					menuPortal: extendBase(menuPortalStyles),
					noOptionsMessage: extendBase(noOptionsMessageStyles),
					valueContainer: extendBase(valueContainerStyles),
					singleValue: extendBase(singleValueStyles),
					multiValue: extendBase(multiValueStyles),
					multiValueLabel: extendBase(multiValueLabelStyles),
					multiValueRemove: extendBase(multiValueRemoveStyles)
				}}
				{...props}
			/>
			{label && (
				<label className={styles.label} htmlFor={uniqueID}>
					{label}
				</label>
			)}
		</div>
	)
}

Select.displayName = 'Select'
export default Select
