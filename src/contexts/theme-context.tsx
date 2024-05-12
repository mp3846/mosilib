import React, { ReactNode, createContext, useState } from 'react'

export type ThemeContextValue = {
	theme: string
	setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const ThemeProvider = ({
	children,
	defaultTheme = 'default'
}: {
	children: ReactNode
	defaultTheme?: string
}) => {
	const [theme, setTheme] = useState(defaultTheme)
	return <ThemeContext.Provider value={{ theme, setTheme }}> {children} </ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
