import { useContext } from 'react'
import { ToastContext, ToastContextValue } from '../contexts/toast-context'

const useToastContext = () => {
	const context = useContext<ToastContextValue | null>(ToastContext)
	if (!context) throw new Error('useToastContext hook should only be used inside ToastProvider')
	return context
}

useToastContext.displayName = 'useToastContext'
export default useToastContext
