import React, { FC, useId } from 'react'
import styles from './styles/select.module.css'
import { joiner } from '../utils'
import ReactSelect, {
	CSSObjectWithLabel,
	ClearIndicatorProps,
	ContainerProps,
	ControlProps,
	DropdownIndicatorProps,
	GroupHeadingProps,
	GroupProps,
	IndicatorSeparatorProps,
	IndicatorsContainerProps,
	InputProps,
	LoadingIndicatorProps,
	MenuListProps,
	MenuProps,
	MultiValueProps,
	MultiValueRemoveProps,
	OptionProps,
	PlaceholderProps,
	ValueContainerProps,
	NoticeProps,
	SingleValueProps,
	PortalStyleArgs
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
	containerStyles?: OverridingStyles<ContainerProps>
	controlStyles?: OverridingStyles<ControlProps>
	menuStyles?: OverridingStyles<MenuProps>
	menuListStyles?: OverridingStyles<MenuListProps>
	inputStyles?: OverridingStyles<InputProps>
	placeholderStyles?: OverridingStyles<PlaceholderProps>
	optionStyles?: OverridingStyles<OptionProps>
	groupStyles?: OverridingStyles<GroupProps>
	dropdownIndicatorStyles?: OverridingStyles<DropdownIndicatorProps>
	loadingIndicatorStyles?: OverridingStyles<LoadingIndicatorProps>
	clearIndicatorStyles?: OverridingStyles<ClearIndicatorProps>
	groupHeadingStyles?: OverridingStyles<GroupHeadingProps>
	loadingMessageStyles?: OverridingStyles<NoticeProps>
	menuPortalStyles?: OverridingStyles<PortalStyleArgs>
	noOptionsMessageStyles?: OverridingStyles<NoticeProps>
	valueContainerStyles?: OverridingStyles<ValueContainerProps>
	singleValueStyles?: OverridingStyles<SingleValueProps>
	multiValueStyles?: OverridingStyles<MultiValueProps>
	multiValueLabelStyles?: OverridingStyles<MultiValueProps>
	multiValueRemoveStyles?: OverridingStyles<MultiValueRemoveProps>
	indicatorSeparatorStyles?: OverridingStyles<IndicatorSeparatorProps>
	indicatorsContainerStyles?: OverridingStyles<IndicatorsContainerProps>
}

type OverridingStyles<T> = (props: T) => CSSObjectWithLabel

type ExtendBase = <T>(
	newStyles?: OverridingStyles<T>,
	modeStyles?: OverridingStyles<T>
) => (base: CSSObjectWithLabel, props: T) => CSSObjectWithLabel

const extendBase: ExtendBase = (newStyles, modeStyles) => (base, props) => ({
	...base,
	...(modeStyles ? modeStyles(props) : {}),
	...(newStyles ? newStyles(props) : {})
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

	const dropdownModeStyles: OverridingStyles<DropdownIndicatorProps> = () => ({
		display: mode === 'simple' ? 'flex' : 'none'
	})

	const containerModeStyles: OverridingStyles<ContainerProps> = () => ({
		boxShadow:
			mode === '3D'
				? '0 0 1px 0 #75757511, inset 2px 2px 4px 0 #a8a8a8, inset -2px -2px 4px 0 #fff'
				: 'initial',
		borderRadius: '4px'
	})

	const clearIndicatorModeStyles: OverridingStyles<ClearIndicatorProps> = () => ({
		display: mode === '3D' ? 'none' : 'flex'
	})

	const controlModeStyles: OverridingStyles<ControlProps> = () => ({
		background: 'transparent',
		border: mode === '3D' ? 'none' : '1px solid gray',
		':hover': { border: mode === '3D' ? 'none' : '1px solid gray' },
		boxShadow: 'none'
	})

	const placeholderModeStyles: OverridingStyles<PlaceholderProps> = () => ({
		fontStyle: 'italic'
	})

	const menuListModeStyles: OverridingStyles<MenuListProps> = () => ({
		padding: 0
	})

	const optionModeStyles: OverridingStyles<OptionProps> = ({ isSelected }) => ({
		background: isSelected ? 'wheat' : 'transparent',
		color: isSelected ? 'black' : 'initial',
		':hover': { background: '#eee' }
	})

	const indicatorSeparatorModeStyles: OverridingStyles<IndicatorSeparatorProps> = () => ({
		display: 'none'
	})

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
				className={joiner(styles.select, styles[`select_${mode}`], className)}
				styles={{
					container: extendBase<ContainerProps>(containerStyles, containerModeStyles),
					control: extendBase<ControlProps>(controlStyles, controlModeStyles),
					menu: extendBase<MenuProps>(menuStyles),
					menuList: extendBase<MenuListProps>(menuListStyles, menuListModeStyles),
					input: extendBase<InputProps>(inputStyles),
					placeholder: extendBase<PlaceholderProps>(
						placeholderStyles,
						placeholderModeStyles
					),
					option: extendBase<OptionProps>(optionStyles, optionModeStyles),
					group: extendBase<GroupProps>(groupStyles),
					indicatorSeparator: extendBase<IndicatorSeparatorProps>(
						indicatorSeparatorStyles,
						indicatorSeparatorModeStyles
					),
					clearIndicator: extendBase<ClearIndicatorProps>(
						clearIndicatorStyles,
						clearIndicatorModeStyles
					),
					loadingIndicator: extendBase<LoadingIndicatorProps>(loadingIndicatorStyles),
					dropdownIndicator: extendBase<DropdownIndicatorProps>(
						dropdownIndicatorStyles,
						dropdownModeStyles
					),
					indicatorsContainer:
						extendBase<IndicatorsContainerProps>(indicatorsContainerStyles),
					groupHeading: extendBase<GroupHeadingProps>(groupHeadingStyles),
					loadingMessage: extendBase<NoticeProps>(loadingMessageStyles),
					noOptionsMessage: extendBase<NoticeProps>(noOptionsMessageStyles),
					menuPortal: extendBase<PortalStyleArgs>(menuPortalStyles),
					valueContainer: extendBase<ValueContainerProps>(valueContainerStyles),
					singleValue: extendBase<SingleValueProps>(singleValueStyles),
					multiValue: extendBase<MultiValueProps>(multiValueStyles),
					multiValueLabel: extendBase<MultiValueProps>(multiValueLabelStyles),
					multiValueRemove: extendBase<MultiValueRemoveProps>(multiValueRemoveStyles)
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
