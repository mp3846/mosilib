import useToastContext from './use-toast-context'
import { handleError } from '../utils'

const useTryCatch = <T extends any[]>(
	callback: (...args: T) => Promise<void>,
	toastDuration: number = 5000,
	onFailure: (error: any, ...args: T) => void = () => {},
	doFinally: (...args: T) => void = () => {}
) => {
	const { setToast } = useToastContext()

	return async (...args: T) => {
		try {
			setToast({})
			await callback(...args)
		} catch (err) {
			setToast({ ...handleError(err), mode: 'error', duration: toastDuration })
			onFailure(err, ...args)
		} finally {
			doFinally(...args)
		}
	}
}

export default useTryCatch
