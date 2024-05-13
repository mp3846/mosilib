import React, { FC, ReactNode, createContext } from 'react'
import useLocalStorage from '../hooks/use-local-storage'

export type LocalStorageContextValue = {
	localValue: any
	setLocalValue: (value: any) => void
}

type LocalStorageProviderProps = {
	children: ReactNode
	storageKey: string
}

const LocalStorageContext = createContext<LocalStorageContextValue | null>(null)

const LocalStorageProvider: FC<LocalStorageProviderProps> = ({ children, storageKey }) => {
	const [localValue, setLocalValue] = useLocalStorage(storageKey)
	return (
		<LocalStorageContext.Provider value={{ localValue, setLocalValue }}>
			{children}
		</LocalStorageContext.Provider>
	)
}

export { LocalStorageContext, LocalStorageProvider }
