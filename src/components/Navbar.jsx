import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Navbar() {

    const user = useContext(UserContext)
  return (
    <div>
        <h1>Welcome {user.name},</h1> 
        <h3>Role: {user.role}</h3></div>
  )
}

export default Navbar