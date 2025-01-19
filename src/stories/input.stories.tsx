import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Input from '../components/input'
import { defaultFont } from './helper'

const meta: Meta<typeof Input> = {
	parameters: {
		layout: 'centered',
		backgrounds: { default: 'light-gray' }
	},
	render: (args) => {
		const [value, setValue] = useState(args.value || '')
		return (
			<div style={{ fontFamily: defaultFont }}>
				<Input {...args} value={value} onChange={({ target }) => setValue(target.value)} />
			</div>
		)
	},
	tags: ['autodocs'],
	argTypes: {
		theme: { control: 'select', options: ['simple', '3D', 'material'] },
		labelSide: { control: 'select', options: ['left', 'right'] }
	},
	args: { placeholder: 'What is your name?', labelSide: 'left' }
}

export default meta
type Story = StoryObj<typeof Input>

export const Simple: Story = {
	args: { label: 'Simple', theme: 'simple', value: 'Mosi' }
}

export const _3D: Story = {
	args: { label: '3D', theme: '3D' }
}

export const Material: Story = {
	args: { label: 'Material', theme: 'material', value: 'Mostafa' }
}
