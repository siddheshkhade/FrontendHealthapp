import React, { useContext, useState } from 'react'
import { store } from '../App'

const Logout = () => {
        const [token, setToken] = useContext(store)
        if(token) {
            // Clear the token to log out
            setToken(null)
            // Optionally, you can redirect to the login page or home page
            window.location.href = '/admin' // Adjust the path as needed
        }
  return (
    <div>
      
    </div>
  )
}

export default Logout
