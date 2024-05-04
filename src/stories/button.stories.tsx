import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Button from '../components/button'
const meta: Meta<typeof Button> = {
	component: Button,
	parameters: {
		layout: 'padded',
		backgrounds: { default: 'light-gray' }
	},
	tags: ['autodocs'],
	args: { text: 'Click me' }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {}
