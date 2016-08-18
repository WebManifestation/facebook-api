import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'

import Page from './components/Page'

import store from './store'

render(
	<Provider store={store}>
		<Page />
	</Provider>,
	document.getElementById('page')
)