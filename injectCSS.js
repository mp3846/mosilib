import fs from 'fs'
import path from 'path'

const libraryDirectory = './dist'

const injectCssImport = (filePath, format) => {
	const cssImportStatement =
		format === 'cjs' ? `require('./index.css');` : `import './index.css';`
	try {
		let fileContent = fs.readFileSync(filePath, 'utf8')
		fileContent = cssImportStatement + fileContent
		fs.writeFileSync(filePath, fileContent)
		console.log(`Injected CSS import into ${filePath}`)
	} catch (error) {
		console.error(`Error injecting CSS import into ${filePath}:`, error)
	}
}

const filesToInjectCss = ['index.js', 'index.modern.js']

filesToInjectCss.forEach((fileName) => {
	const filePath = path.join(libraryDirectory, fileName)
	const format = fileName.endsWith('index.js') ? 'cjs' : 'esm'
	if (fs.existsSync(filePath)) {
		injectCssImport(filePath, format)
	} else {
		console.error(`File ${fileName} does not exist.`)
	}
})
