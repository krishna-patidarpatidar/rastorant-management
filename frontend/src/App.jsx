import React from 'react'
import MenuWrapper from './menu/MenuWrapper'
import { OrderProvider } from './context/OrderContext'

const App = () => {
  return (
    <div>
      <OrderProvider>
      <MenuWrapper />
      </OrderProvider>
    
    </div>
  )
}

export default App