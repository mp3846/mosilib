import { useState } from 'react'

const useLocalStorage = (key: string, initialValue?: any) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const existingValue = localStorage.getItem(key)
			return existingValue ? JSON.parse(existingValue) : initialValue
		} catch (error) {
			console.log('error in useLocalStorage useState initializer', error)
			return initialValue
		}
	})
	const setValue = (value: any) => {
		try {
			const storable = typeof value === 'function' ? value(storedValue) : value
			localStorage.setItem(key, JSON.stringify(storable))
			setStoredValue(storable)
		} catch (error) {
			console.log('error in useLocalStorage setValue function', error)
		}
	}
	return [storedValue, setValue]
}

export default useLocalStorage
