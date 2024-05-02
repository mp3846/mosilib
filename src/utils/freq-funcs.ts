/**
 * Combines multiple CSS class names into a single string.
 * If only one class name is provided, returns it as is.
 *
 * @param classNames - An array of CSS class names.
 * @returns The combined CSS class names (separated by space).
 */
const joiner = (...classNames: string[]) =>
	classNames.length > 1 ? classNames.join(' ') : classNames[0]

export { joiner }
