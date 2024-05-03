import { useState, useEffect } from 'react'

const useMouseMove = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	const handleMouseMove = (event: MouseEvent) =>
		setPosition({ x: event.clientX, y: event.clientY })

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return position
}

export default useMouseMove
