import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CreateUserButton extends Component {

    handleClick(event) {
        event.preventDefault()
        this.props.clickCreateUserButton()
    }

    render () {
        return (
            <div className="navbar">
                <button onClick={(event) => this.handleClick(event)} className="button"><NavLink className="link-to-user" to="/user">Create User</NavLink></button>
            </div>
        )
    }
}

export default CreateUserButton