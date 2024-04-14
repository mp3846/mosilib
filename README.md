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
import { Theme, useThemeContext, usePopupContext, Popup } from 'mosilib'

const Test = () => {
	const { popup, setPopup } = usePopupContext()
	const { theme, setTheme } = useThemeContext()
	return (
		<div>
			<Popup title={popup.title} content={popup.content} />
			test
			<button onClick={() => setPopup({ title: 'test popup', content: Date.now() })}>
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
import { PopupProvider, ThemeProvider } from 'mosilib'
import './App.css'

function App() {
    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <ThemeProvider>
                <PopupProvider>
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
                </PopupProvider>
            </ThemeProvider>
        </ErrorBoundary>
    )
}

export default App

```

## License

MIT © [mp3846](https://github.com/mp3846)
