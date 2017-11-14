import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

//redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

import styles from './index.scss'
import Home from './containers/Home'

export const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
export const store = createStoreWithMiddleware(reducers)


class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))