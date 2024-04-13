import { useContext } from 'react'
import { PopupContext } from '../contexts/popup-context'
import { PopupContextValue } from '../contexts/popup-context'

const usePopupContext = () => {
	const context = useContext<PopupContextValue | null>(PopupContext)
	if (!context)
		throw new Error('usePopupContext hook should only be used inside PopupContextProvider')
	return context
}

usePopupContext.displayName = 'usePopupContext'
export default usePopupContext
