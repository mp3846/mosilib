type ErrorResponse = {
	status: number
	data: any
}

type ErrorWithResponse = Error & { response: ErrorResponse }

type ErrorDetails = {
	title: string
	content: string
}

const handleError = (error: any): ErrorDetails => {
	if (!error) return { title: '', content: '' }

	let title = 'Client Error'
	let content = error.message || error.toString()

	if ('response' in error && error.hasOwnProperty('response')) {
		const { status, data } = (error as ErrorWithResponse).response
		title = status > 499 ? 'Server Error' : 'Bad Request'
		content = data
		console.log(`Error ${status} => ${content}`)
	} else {
		console.error(error)
	}

	return { title, content }
}

export default handleError
