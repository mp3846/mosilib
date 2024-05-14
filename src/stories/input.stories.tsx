import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Input from '../components/input'
import { defaultFont } from './helper'

const meta: Meta<typeof Input> = {
	parameters: {
		layout: 'centered',
		backgrounds: { default: 'light-gray' }
	},
	render: (args) => (
		<div style={{ fontFamily: defaultFont }}>
			<Input {...args} />
		</div>
	),
	tags: ['autodocs'],
	args: { placeholder: 'What is your name?' }
}

export default meta
type Story = StoryObj<typeof Input>

export const Simple: Story = {
	args: { label: 'Simple', mode: 'simple', value: 34 }
}

export const _3D: Story = {
	args: { label: '3D', mode: '3D' }
}
