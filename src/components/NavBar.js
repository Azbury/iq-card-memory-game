import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <div className="navbar">
            <button className="create-user-button"><NavLink className="link-to-user" to="/user">Create User</NavLink></button>
        </div>
    )
}

export default NavBar