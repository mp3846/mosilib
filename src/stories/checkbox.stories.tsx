import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from '../components/checkbox'
import { defaultFont } from './helper'

const meta: Meta<typeof Checkbox> = {
	render: (args) => (
		<div style={{ fontFamily: defaultFont }}>
			<Checkbox {...args} />
		</div>
	),
	parameters: {
		layout: 'centered',
		backgrounds: { default: 'light-gray' }
	},
	tags: ['autodocs'],
	args: { defaultChecked: true, labelSide: 'left' }
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Simple: Story = {
	args: { label: 'Simple', theme: 'simple' }
}

export const Fill: Story = {
	args: { label: 'Fill', theme: 'fill' }
}
