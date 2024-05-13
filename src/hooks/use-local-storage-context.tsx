import { useContext } from 'react'
import { LocalStorageContext, LocalStorageContextValue } from '../contexts/local-storage-context'

const useLocalStorageContext = () => {
	const context = useContext<LocalStorageContextValue | null>(LocalStorageContext)
	if (!context)
		throw new Error(
			'useLocalStorageContext hook should only be used inside LocalStorageProvider'
		)
	return context
}

useLocalStorageContext.displayName = 'useLocalStorageContext'
export default useLocalStorageContext
