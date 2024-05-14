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
