/**
 * Combines multiple CSS class names into a single string.
 * If only one class name is provided, returns it as is.
 *
 * @param classNames - An array of CSS class names.
 * @returns The combined CSS class names (separated by space).
 */
const joiner = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ')

type CapitalizeOption = 'first' | 'all'

/**
 * Capitalizes words in a string based on the specified option.
 * @param {string} str - The input string.
 * @param {('first' | 'all')} [option='all'] - The capitalization option.
 *   - 'first': Capitalize only the first word.
 *   - 'all': Capitalize all words (default).
 * @returns {string} The string with capitalized words.
 */
const capitalize = (str: string, option: CapitalizeOption = 'all'): string => {
	const words = str.split(' ')
	if (option === 'first') {
		if (words.length > 0) words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
	} else if (option === 'all') {
		for (let i = 0; i < words.length; i++) {
			if (words[i]) words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
		}
	}
	return words.join(' ')
}

export { joiner, capitalize }
