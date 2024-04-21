import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'

import Popup from '../components/popup'

const meta: Meta<typeof Popup> = {
	component: Popup,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: { mode: { control: 'select' } },
	args: {
		title: 'Title',
		content: 'Content',
		mode: 'toast',
		onConfirm: fn()
	}
}

export default meta
type Story = StoryObj<typeof Popup>

export const Toast: Story = {
	args: {
		title: 'Toast',
		mode: 'toast'
	}
}

export const Warning: Story = {
	args: {
		title: 'Warning',
		mode: 'warning'
	}
}

export const Error: Story = {
	args: {
		title: 'Error',
		mode: 'error'
	}
}
