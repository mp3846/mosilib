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

type Theme = 'simple' | '3D' | 'material'

type SelectType = {
	onChange?: (newValue: any) => void
	label?: string
	labelSide?: 'right' | 'left'
	theme?: Theme
	className?: string
	containerClassName?: string
	disabled?: boolean
	required?: boolean
	name?: string
	rtl?: boolean
	isClearable?: boolean
	autoFocus?: boolean
	menuIsOpen?: boolean
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
	themeStyles?: OverridingStyles<T>
) => (base: CSSObjectWithLabel, props: T) => CSSObjectWithLabel

const extendBase: ExtendBase = (newStyles, themeStyles) => (base, props) => ({
	...base,
	...(themeStyles ? themeStyles(props) : {}),
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
	menuIsOpen,
	noOptionsText,
	className,
	containerClassName,
	placeholder,
	value,
	defaultValue,
	defaultInputValue,
	options,
	label,
	labelSide = 'left',
	theme = 'simple',
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

	const dropdownThemeStyles: OverridingStyles<DropdownIndicatorProps> = () => ({
		display: theme === 'simple' ? 'flex' : 'none'
	})

	const singleValueThemeStyles: OverridingStyles<SingleValueProps> = () => ({
		color: 'inherit',
		display: theme === 'simple' ? 'flex' : 'none'
	})

	const multiValueThemeStyles: OverridingStyles<MultiValueProps> = () => ({
		color: 'inherit'
	})

	const inputThemeStyles: OverridingStyles<InputProps> = () => ({
		color: 'inherit'
	})

	const containerThemeStyles: OverridingStyles<ContainerProps> = () => ({
		boxShadow:
			theme === '3D'
				? '0 0 1px 0 #75757511, inset 2px 2px 4px 0 #a8a8a8, inset -2px -2px 4px 0 #fff'
				: 'initial',
		borderRadius: '4px'
	})

	const clearIndicatorThemeStyles: OverridingStyles<ClearIndicatorProps> = () => ({
		display: theme === '3D' ? 'none' : 'flex'
	})

	const controlThemeStyles: OverridingStyles<ControlProps> = () => ({
		background: 'transparent',
		border: theme === '3D' ? 'none' : '1px solid gray',
		':hover': { border: theme === '3D' ? 'none' : '1px solid gray' },
		boxShadow: 'none'
	})

	const placeholderThemeStyles: OverridingStyles<PlaceholderProps> = () => ({
		color: 'inherit',
		fontStyle: 'italic'
	})

	const menuListThemeStyles: OverridingStyles<MenuListProps> = () => ({
		padding: 0
	})

	const optionThemeStyles: OverridingStyles<OptionProps> = ({ isSelected, isFocused }) => ({
		background: isSelected ? '#d6d6d6' : isFocused ? '#eee' : 'transparent',
		color: isSelected ? 'black' : 'inherit',
		':hover': { background: '#e5e5e5' }
	})

	const indicatorSeparatorThemeStyles: OverridingStyles<IndicatorSeparatorProps> = () => ({
		display: 'none'
	})

	return (
		<div
			className={joiner(styles.container, containerClassName)}
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
				menuIsOpen={menuIsOpen}
				noOptionsMessage={() => noOptionsText}
				isDisabled={disabled}
				required={required}
				onChange={onChange}
				className={joiner(styles.select, styles[`select_${theme}`], className)}
				styles={{
					container: extendBase<ContainerProps>(containerStyles, containerThemeStyles),
					control: extendBase<ControlProps>(controlStyles, controlThemeStyles),
					menu: extendBase<MenuProps>(menuStyles),
					menuList: extendBase<MenuListProps>(menuListStyles, menuListThemeStyles),
					input: extendBase<InputProps>(inputStyles, inputThemeStyles),
					placeholder: extendBase<PlaceholderProps>(
						placeholderStyles,
						placeholderThemeStyles
					),
					option: extendBase<OptionProps>(optionStyles, optionThemeStyles),
					group: extendBase<GroupProps>(groupStyles),
					indicatorSeparator: extendBase<IndicatorSeparatorProps>(
						indicatorSeparatorStyles,
						indicatorSeparatorThemeStyles
					),
					clearIndicator: extendBase<ClearIndicatorProps>(
						clearIndicatorStyles,
						clearIndicatorThemeStyles
					),
					loadingIndicator: extendBase<LoadingIndicatorProps>(loadingIndicatorStyles),
					dropdownIndicator: extendBase<DropdownIndicatorProps>(
						dropdownIndicatorStyles,
						dropdownThemeStyles
					),
					indicatorsContainer:
						extendBase<IndicatorsContainerProps>(indicatorsContainerStyles),
					groupHeading: extendBase<GroupHeadingProps>(groupHeadingStyles),
					loadingMessage: extendBase<NoticeProps>(loadingMessageStyles),
					noOptionsMessage: extendBase<NoticeProps>(noOptionsMessageStyles),
					menuPortal: extendBase<PortalStyleArgs>(menuPortalStyles),
					valueContainer: extendBase<ValueContainerProps>(valueContainerStyles),
					singleValue: extendBase<SingleValueProps>(
						singleValueStyles,
						singleValueThemeStyles
					),
					multiValue: extendBase<MultiValueProps>(
						multiValueStyles,
						multiValueThemeStyles
					),
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
