import React, { ReactNode, createContext, useState } from 'react'
import { PopupType } from '../components/popup'

export type PopupContextValue = {
	popup: PopupType
	setPopup: (popup: PopupType) => void
}

const PopupContext = createContext<PopupContextValue | null>(null)

const PopupProvider = ({ children }: { children: ReactNode }) => {
	const [popup, setPopup] = useState<PopupType>({ title: '', content: '' })
	return <PopupContext.Provider value={{ popup, setPopup }}> {children} </PopupContext.Provider>
}

export { PopupContext, PopupProvider }
