import { combineReducers } from 'redux'
import blog from './posts'
import user from './auth'
export default combineReducers({ blog, user })