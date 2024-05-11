import React, { FC, Fragment, ReactNode, useEffect } from 'react'
import { useToastContext } from '../hooks'
import { handleError } from '../utils'

const GlobalErrorHandler: FC<any> = ({ children }: { children: ReactNode }) => {
	const { setToast } = useToastContext()

	useEffect(() => {
		const handleWindowError: OnErrorEventHandler = (error) => {
			setToast({ ...handleError(error), mode: 'error' })
			return true
		}

		const handlePromiseRejection = (event: PromiseRejectionEvent) => {
			setToast({ ...handleError(event.reason), mode: 'error' })
			return true
		}

		window.onerror = handleWindowError
		window.onunhandledrejection = handlePromiseRejection

		return () => {
			window.onerror = null
			window.onunhandledrejection = null
		}
	}, [])

	return <Fragment>{children}</Fragment>
}

export default GlobalErrorHandler
