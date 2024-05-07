import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from '../components/checkbox'
const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	parameters: {
		layout: 'centered',
		backgrounds: { default: 'light-gray' }
	},
	tags: ['autodocs'],
	args: { defaultChecked: true }
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Simple: Story = {
	args: { label: 'Simple', mode: 'simple' }
}

export const Fill: Story = {
	args: { label: 'Fill', mode: 'fill' }
}
