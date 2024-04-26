## Install

```bash
npm install mosilib
```

Or

```bash
yarn add mosilib
```

## Usage

```jsx
// test.jsx
import { Theme, useThemeContext, useToastContext, Toast } from 'mosilib'

const Test = () => {
	const { toast, setToast } = useToastContext()
	const { theme, setTheme } = useThemeContext()
	return (
		<div>
			<Toast title={toast.title} content={toast.content} />
			test
			<button onClick={() => setToast({ title: 'test toast', content: Date.now() })}>
				new timestamp
			</button>
			<button onClick={() => setTheme('custom')}>change theme</button>
			<Theme theme={theme} />
		</div>
	)
}

Test.displayName = 'Test'
export default Test
```

```jsx
// App.jsx
import logo from './logo.svg'
import ErrorBoundary from './components/errorBoundry'
import Test from './components/test'
import { ToastProvider, ThemeProvider } from 'mosilib'
import './App.css'

function App() {
    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <ThemeProvider>
                <ToastProvider>
                    <div className='App'>
                        <Test />
                        <header className='App-header'>
                            <img src={logo} className='App-logo' alt='logo' />
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                            <a
                                className='App-link'
                                href='https://reactjs.org'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Learn React
                            </a>
                        </header>
                    </div>
                </ToastProvider>
            </ThemeProvider>
        </ErrorBoundary>
    )
}

export default App

```

## License

MIT © [mp3846](https://github.com/mp3846)
