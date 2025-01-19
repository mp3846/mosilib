import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Button from '../components/button'
import { defaultFont } from './helper'

const meta: Meta<typeof Button> = {
	render: (args) => (
		<div style={{ fontFamily: defaultFont }}>
			<Button {...args} />
		</div>
	),
	parameters: {
		layout: 'centered',
		backgrounds: { default: 'light-gray' }
	},
	tags: ['autodocs'],
	argTypes: {
		theme: { control: 'select', options: ['simple', '3D', 'material'] },
		variant: { control: 'select', options: ['text', 'outlined', 'contained'] }
	},
	args: { text: 'Click me' }
}

export default meta
type Story = StoryObj<typeof Button>

export const Simple: Story = {
	args: {
		text: 'Click me',
		theme: 'simple'
	}
}

export const _3D: Story = {
	args: {
		text: 'Click me',
		theme: '3D'
	}
}

export const Material: Story = {
	args: {
		text: 'Click me',
		theme: 'material',
		variant: 'outlined'
	}
}
