import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
                createLogger( { collapsed: true } ),
                routerMiddleware( browserHistory )
            ),
            DevTools.instrument()
        )
    )

    if ( module.hot ) {
        module.hot.accept( '../reducers', () => {
            const nextRootReducer = require( '../reducers' ).default
            store.replaceReducer( nextRootReducer )
        } )
    }

    return store
}

export default configureStore
