import React from 'react'
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'

import Toast from '../components/toast'
import { ToastProvider } from '../contexts/toast-context'

const meta: Meta<typeof Toast> = {
	component: Toast,
	parameters: {
		layout: 'padded',
		backgrounds: { default: 'light-gray' }
	},
	render: (args) => (
		<div style={{ height: '150px' }}>
			<ToastProvider>
				<Toast {...args} />
			</ToastProvider>
		</div>
	),
	tags: ['autodocs'],
	argTypes: { mode: { control: 'select' } },
	args: {
		mode: 'info',
		hasAction: false,
		onAction: fn()
	}
}

export default meta
type Story = StoryObj<typeof Toast>

export const Info: Story = {
	args: {
		title: 'Info',
		content: 'There are some issues with one of your components'
	}
}

export const Warning: Story = {
	args: {
		title: 'Warning',
		mode: 'warning',
		hasAction: true,
		content: 'This is the content of a warning toast'
	}
}

export const Error: Story = {
	args: {
		title: 'Error',
		mode: 'error',
		content: 'This is the content of an Error message toast'
	}
}
