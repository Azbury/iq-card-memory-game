import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ProfilePageButton extends Component {

    handleClick(event) {
        event.preventDefault()
        this.props.stopGame()
    }

    render () {
        return (
            <div className="navbar">
                <button onClick={(event) => this.handleClick(event)} className="button"><NavLink className="link" to="/user">Profile Page</NavLink></button>
            </div>
        )
    }
}

export default ProfilePageButton