import React, { ReactNode, createContext, useState } from 'react'
import { ToastType } from '../components/toast'
import { Provider as RXToastProvider, Viewport as RXToastViewPort } from '@radix-ui/react-toast'
import styles from '../components/styles/toast.module.css'

export type ToastContextValue = {
	toast: ToastType
	setToast: (toast: ToastType) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

const ToastProvider = ({ children }: { children: ReactNode }) => {
	const [toast, setToast] = useState<ToastType>({ title: 'Title', content: 'Content' })
	return (
		<ToastContext.Provider value={{ toast, setToast }}>
			<RXToastProvider>
				{children}
				<RXToastViewPort className={styles.toastViewport} />
			</RXToastProvider>
		</ToastContext.Provider>
	)
}

export { ToastContext, ToastProvider }
