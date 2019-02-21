import React from 'react'
import ReactDOM from 'react-dom'

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './App'

import authReducer from './store/reducers/auth.reducer'

import './styles/reset.css'
import './styles/global.css'

import * as serviceWorker from './serviceWorker'

const rootReducer = combineReducers({ auth: authReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))

serviceWorker.register()
