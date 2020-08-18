import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/create-user">Create User</NavLink>
            <NavLink to="/game">Game</NavLink>
        </div>
    )
}

export default NavBar