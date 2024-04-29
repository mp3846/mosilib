import React, { FC, useEffect, useState } from 'react'
import * as RXToast from '@radix-ui/react-toast'
import styles from './styles/toast.module.css'

export interface ToastType {
	title?: string
	content?: string
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
	const [open, setOpen] = useState(false)
	const [delayedProps, setDelayedProps] = useState<ToastType>({})

	useEffect(() => {
		const showToast = !!(title || content)
		setOpen(showToast)
		// Delay for smooth fade-out
		const timeoutID = setTimeout(
			() => setDelayedProps({ title, content, mode, duration, hasAction, actionText }),
			showToast ? 0 : 300
		)
		return () => clearTimeout(timeoutID)
	}, [title, content])

	return (
		<RXToast.Root
			className={styles.toastRoot}
			open={open}
			onOpenChange={setOpen}
			duration={delayedProps.duration}
			{...props}>
			<div className={styles.titleWrapper}>
				<RXToast.Title
					className={styles.toastTitle}
					style={{ color: `var(--toast-color-title-${delayedProps.mode})` }}>
					{delayedProps.title}
				</RXToast.Title>
				<RXToast.Close className={styles.toastClose} aria-label='Close'>
					<span aria-hidden>x</span>
				</RXToast.Close>
			</div>
			{delayedProps.title && (
				<span
					className={styles.separator}
					style={{ background: `var(--toast-color-title-${delayedProps.mode})` }}
				/>
			)}
			<RXToast.Description
				className={styles.toastDescription}
				style={{ marginBottom: !delayedProps.hasAction ? '10px' : 'unset' }}>
				{delayedProps.content}
			</RXToast.Description>
			{delayedProps.hasAction && (
				<RXToast.Action onClick={onAction} className={styles.toastAction} altText='Action'>
					{delayedProps.actionText}
				</RXToast.Action>
			)}
		</RXToast.Root>
	)
}

Toast.displayName = 'Toast'
export default Toast
