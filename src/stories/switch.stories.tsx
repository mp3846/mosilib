import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Switch from '../components/switch'
import { defaultFont } from './helper'

const meta: Meta<typeof Switch> = {
	render: (args) => (
		<div style={{ fontFamily: defaultFont }}>
			<Switch {...args} />
		</div>
	),
	parameters: {
		layout: 'centered',
		backgrounds: { default: 'light-gray' }
	},
	tags: ['autodocs'],
	argTypes: {
		theme: { control: 'select', options: ['simple', '3D'] },
		labelSide: { control: 'select', options: ['left', 'right'] }
	},
	args: { defaultChecked: true, labelSide: 'left' }
}

export default meta
type Story = StoryObj<typeof Switch>

export const Simple: Story = {
	args: { label: 'Simple', theme: 'simple' }
}

export const _3D: Story = {
	args: { label: '3D', theme: '3D' }
}
