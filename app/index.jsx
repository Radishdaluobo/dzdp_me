import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'
import style from './static/js/style'
style()
import './static/css/index.less'
import './static/css/font.css'

style()
// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'

import { testFetch } from './fetch/test.js'
testFetch();

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)
