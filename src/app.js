import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import fbApiApp from './reducers'

import 'normalize.css/normalize.css'

import Page from './components/Page'

let store = createStore(fbApiApp)

render(
	<Provider store={store}>
		<Page />
	</Provider>,
	document.getElementById('page')
)