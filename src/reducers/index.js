import { combineReducers } from 'redux'
import fbAuth from './fbAuth'

const fbApiApp = combineReducers({
  fbAuth,
})

export default fbApiApp