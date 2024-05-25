import React from 'react'
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import Toast from '../components/toast'
import { ToastProvider } from '../contexts/toast-context'
import { defaultFont } from './helper'

const meta: Meta<typeof Toast> = {
	component: Toast,
	parameters: {
		layout: 'padded',
		backgrounds: { default: 'light-gray' }
	},
	render: (args) => (
		<div style={{ height: '150px', fontFamily: defaultFont }}>
			<ToastProvider>
				<Toast {...args} />
			</ToastProvider>
		</div>
	),
	tags: ['autodocs'],
	argTypes: { costume: { control: 'select' } },
	args: {
		costume: 'info',
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
		costume: 'warning',
		hasAction: true,
		content: 'This is the content of a warning toast'
	}
}

export const Error: Story = {
	args: {
		title: 'Error',
		costume: 'error',
		content: 'This is the content of an Error message toast'
	}
}
