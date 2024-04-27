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
	const [delayedTitle, setDelayedTitle] = useState<string | undefined>('')
	const [delayedContent, setDelayedContent] = useState<string | undefined>('')

	useEffect(() => {
		const showToast = !!(title || content)
		setOpen(showToast)
		// Introducing a delay for a smooth fade-out transition when closing the toast
		setTimeout(() => (setDelayedTitle(title), setDelayedContent(content)), showToast ? 0 : 300)
	}, [title, content])

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
					{delayedTitle}
				</RXToast.Title>
				<RXToast.Close className={styles.toastClose} aria-label='Close'>
					<span aria-hidden>x</span>
				</RXToast.Close>
			</div>
			{delayedTitle && (
				<span
					className={styles.separator}
					style={{ background: `var(--toast-color-title-${mode})` }}
				/>
			)}
			<RXToast.Description
				className={styles.toastDescription}
				style={{ marginBottom: !hasAction ? '10px' : 'unset' }}>
				{delayedContent}
			</RXToast.Description>
			{hasAction && (
				<RXToast.Action onClick={onAction} className={styles.toastAction} altText='Action'>
					{actionText}
				</RXToast.Action>
			)}
		</RXToast.Root>
	)
}

Toast.displayName = 'Toast'
export default Toast
