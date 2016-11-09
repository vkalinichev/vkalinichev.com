import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import './actions/actions'
import './style.styl'
import Root from './containers/Root'
import DevTools from './containers/DevTools'
import configureStore from './store/configureStore'

const store = configureStore( {
    general: {
        app_name: 'vkalinichev homepage'
    }
} )

const history = syncHistoryWithStore(
    browserHistory,
    store
)

window.store = store

render(
    <Provider store={ store } >
        <div className='wrapper'>
            <Router history={ history } >
                <Route path='/' component={ Root } />
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById( 'root' )
)
