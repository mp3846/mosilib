type ErrorDetails = {
	title: string
	content: string
}

const getErrorMessage = (error: unknown): string => {
	let message: string = 'Something went wrong!'
	if (error instanceof Error) message = error.message
	return message
}

const handleError = (error: unknown): ErrorDetails => {
	if (!error) return { title: '', content: '' }
	return { title: (error as any).name || 'Error', content: getErrorMessage(error) }
}

export default handleError
