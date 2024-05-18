import React, { FC, useId } from 'react'
import styles from './styles/select.module.css'
import { joiner } from '../utils'
import ReactSelect, {
	CSSObjectWithLabel,
	ClearIndicatorProps,
	ContainerProps,
	ControlProps,
	DropdownIndicatorProps,
	GroupBase,
	GroupHeadingProps,
	GroupProps,
	IndicatorSeparatorProps,
	IndicatorsContainerProps,
	InputProps,
	LoadingIndicatorProps,
	MenuListProps,
	MenuProps,
	MenuPortalProps,
	MultiValueProps,
	MultiValueRemoveProps,
	OptionProps,
	PlaceholderProps,
	ValueContainerProps,
	NoticeProps
} from 'react-select'

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
	containerStyles?: OverridingStyles<ContainerProps<any, false, GroupBase<any>>>
	controlStyles?: OverridingStyles<ControlProps<any, false, GroupBase<any>>>
	menuStyles?: OverridingStyles<MenuProps<any, false, GroupBase<any>>>
	menuListStyles?: OverridingStyles<MenuListProps<any, false, GroupBase<any>>>
	inputStyles?: OverridingStyles<InputProps<any, false, GroupBase<any>>>
	placeholderStyles?: OverridingStyles<PlaceholderProps<any, false, GroupBase<any>>>
	optionStyles?: OverridingStyles<OptionProps<any, false, GroupBase<any>>>
	groupStyles?: OverridingStyles<GroupProps<any, false, GroupBase<any>>>
	dropdownIndicatorStyles?: OverridingStyles<DropdownIndicatorProps<any, false, GroupBase<any>>>
	loadingIndicatorStyles?: OverridingStyles<LoadingIndicatorProps<any, false, GroupBase<any>>>
	clearIndicatorStyles?: OverridingStyles<ClearIndicatorProps<any, false, GroupBase<any>>>
	groupHeadingStyles?: OverridingStyles<GroupHeadingProps<any, false, GroupBase<any>>>
	loadingMessageStyles?: OverridingStyles<LoadingIndicatorProps<any, false, GroupBase<any>>>
	menuPortalStyles?: OverridingStyles<MenuPortalProps<any, false, GroupBase<any>>>
	noOptionsMessageStyles?: OverridingStyles<NoticeProps<any, false, GroupBase<any>>>
	valueContainerStyles?: OverridingStyles<ValueContainerProps<any, false, GroupBase<any>>>
	singleValueStyles?: OverridingStyles<MultiValueProps<any, false, GroupBase<any>>>
	multiValueStyles?: OverridingStyles<MultiValueProps<any, false, GroupBase<any>>>
	multiValueLabelStyles?: OverridingStyles<MultiValueProps<any, false, GroupBase<any>>>
	multiValueRemoveStyles?: OverridingStyles<MultiValueRemoveProps<any, false, GroupBase<any>>>
	indicatorSeparatorStyles?: OverridingStyles<IndicatorSeparatorProps<any, false, GroupBase<any>>>
	indicatorsContainerStyles?: OverridingStyles<
		IndicatorsContainerProps<any, false, GroupBase<any>>
	>
}

type OverridingStyles<T> = (state: T) => CSSObjectWithLabel

const extendBase =
	(newStyles: OverridingStyles<any> | undefined) => (base: CSSObjectWithLabel, state: any) => ({
		...base,
		...(newStyles ? newStyles(state) : {})
	})

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
