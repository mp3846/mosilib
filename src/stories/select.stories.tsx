import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Select from '../components/select'
import { defaultFont } from './helper'

const meta: Meta<typeof Select> = {
	render: (args) => {
		const [value, setValue] = useState(args.value || '')
		return (
			<div style={{ fontFamily: defaultFont, minHeight: '40vh' }}>
				<Select {...args} value={value} onChange={setValue} />
			</div>
		)
	},
	parameters: {
		layout: 'centered',
		backgrounds: { default: 'light-gray' }
	},
	tags: ['autodocs'],
	argTypes: {
		theme: { control: 'select', options: ['simple', '3D', 'material'] },
		labelSide: { control: 'select', options: ['left', 'right'] }
	},
	args: {
		labelSide: 'left',
		placeholder: 'Who to blame?',
		rtl: false,
		autoFocus: false,
		disabled: false,
		options: [
			{ label: 'Me', value: 1 },
			{ label: 'You', value: 2 },
			{ label: 'Him', value: 3 },
			{ label: 'Her', value: 4 },
			{ label: 'Them', value: 5 }
		]
	}
}

export default meta
type Story = StoryObj<typeof Select>

export const Simple: Story = {
	args: { label: 'Simple', theme: 'simple' }
}

export const _3D: Story = {
	args: { label: '3D', theme: '3D' }
}
