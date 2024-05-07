import type { Meta, StoryObj } from '@storybook/react'

import Switch from '../components/switch'
const meta: Meta<typeof Switch> = {
	component: Switch,
	parameters: {
		layout: 'centered',
		backgrounds: { default: 'light-gray' }
	},
	tags: ['autodocs'],
	args: { defaultChecked: true }
}

export default meta
type Story = StoryObj<typeof Switch>

export const Simple: Story = {
	args: { label: 'Simple', mode: 'simple' }
}

export const _3D: Story = {
	args: { label: '3D', mode: '3D' }
}
