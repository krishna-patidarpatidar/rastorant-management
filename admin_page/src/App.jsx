import React from 'react'
import { Provider } from 'react-redux'
import Store from './redux/Store'
import Route from './PageRoute/PageRoute'

const App = () => {
  return (
    <Provider store={ Store}>
      <Route/>
    </Provider>
  )
}

export default App