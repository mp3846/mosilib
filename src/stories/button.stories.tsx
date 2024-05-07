import type { Meta, StoryObj } from '@storybook/react'

import Button from '../components/button'
const meta: Meta<typeof Button> = {
	component: Button,
	parameters: {
		layout: 'centered',
		backgrounds: { default: 'light-gray' }
	},
	tags: ['autodocs'],
	args: { text: 'Click me' }
}

export default meta
type Story = StoryObj<typeof Button>

export const _3D: Story = {
	args: {
		text: 'Click me',
		mode: '3D'
	}
}

export const Simple: Story = {
	args: {
		text: 'Click me',
		mode: 'simple'
	}
}
