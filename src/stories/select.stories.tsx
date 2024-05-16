import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Select from '../components/select'
import { defaultFont } from './helper'

const meta: Meta<typeof Select> = {
	render: (args) => {
		const [value, setValue] = useState(args.value || '')
		return (
			<div style={{ fontFamily: defaultFont }}>
				<Select {...args} value={value} onChange={(newValue) => setValue(newValue)} />
			</div>
		)
	},
	parameters: {
		layout: 'centered',
		backgrounds: { default: 'light-gray' }
	},
	tags: ['autodocs'],
	args: {
		labelSide: 'left',
		placeholder: 'Who to blame?',
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
	args: { label: 'Simple', mode: 'simple' }
}

export const _3D: Story = {
	args: { label: '3D', mode: '3D' }
}
