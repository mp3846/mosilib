import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-context'
import { ThemeContextValue } from '../contexts/theme-context'

const useThemeContext = () => {
	const context = useContext<ThemeContextValue | null>(ThemeContext)
	if (!context) throw new Error('useThemeContext hook should only be used inside ThemeProvider')
	return context
}

useThemeContext.displayName = 'useThemeContext'
export default useThemeContext
