import React, { createContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from './header/Header'
import Routing from './Routing'

export const store = createContext()
const App = () => {
  const [token, setToken] = useState("")

  return (
    <div>
      <store.Provider value={[token, setToken]}>
        <Header />
        <Routing />
      </store.Provider>
    </div>
  )
}

export default App
