import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import anecdoteStore from './store'
import App from './App'



ReactDOM.render(
  <Provider store={anecdoteStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)