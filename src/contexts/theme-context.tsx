import React, { ReactNode, createContext, useState } from 'react'
import { ThemeType } from '../components/theme'

export type ThemeContextValue = {
	theme: ThemeType
	setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<ThemeType>('light')
	return <ThemeContext.Provider value={{ theme, setTheme }}> {children} </ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
