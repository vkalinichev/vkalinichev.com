import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import general from './general'

const plannerApp = combineReducers( {
    general,
    routing
} )

export default plannerApp
