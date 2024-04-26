import React, { FC, useState } from 'react'
import * as RXToast from '@radix-ui/react-toast'
import styles from './styles/toast.module.css'

export interface ToastType {
	title: string
	content: string
	mode?: 'info' | 'warning' | 'error'
	duration?: number
	hasAction?: boolean
	actionText?: string
	onAction?: () => void
}

const Toast: FC<ToastType> = ({
	title,
	content,
	mode = 'info',
	duration = Infinity,
	hasAction = false,
	actionText = 'OK',
	onAction = () => {},
	...props
}) => {
	const [open, setOpen] = useState(!!(title || content))

	return (
		<RXToast.Root
			className={styles.toastRoot}
			open={open}
			onOpenChange={setOpen}
			duration={duration}
			{...props}>
			<div className={styles.titleWrapper}>
				<RXToast.Title
					className={styles.toastTitle}
					style={{ color: `var(--toast-color-title-${mode})` }}>
					{title}
				</RXToast.Title>
				<RXToast.Close className={styles.toastClose} aria-label='Close'>
					<span aria-hidden>x</span>
				</RXToast.Close>
			</div>
			{title && (
				<span
					className={styles.separator}
					style={{ background: `var(--toast-color-title-${mode})` }}
				/>
			)}
			<RXToast.Description
				className={styles.toastDescription}
				style={{ marginBottom: !hasAction ? '10px' : 'unset' }}>
				{content}
			</RXToast.Description>
			{hasAction && (
				<RXToast.Action className={styles.toastAction} altText='Action'>
					{actionText}
				</RXToast.Action>
			)}
		</RXToast.Root>
	)
}

Toast.displayName = 'Toast'
export default Toast
