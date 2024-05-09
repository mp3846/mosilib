import React, { ReactNode, createContext, useState } from 'react'

export type ThemeContextValue = {
	theme: string
	setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState('default')
	return <ThemeContext.Provider value={{ theme, setTheme }}> {children} </ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
