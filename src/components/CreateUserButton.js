import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//CreateUserButton
//Button on the landing page where the user will click to get to the user route where they will enter their username
class CreateUserButton extends Component {

    handleClick(event) {
        event.preventDefault()
        this.props.clickCreateUserButton()
    }

    render () {
        return (
            <div className="navbar">
                <button onClick={(event) => this.handleClick(event)} className="button"><NavLink className="link" to="/user">Create User</NavLink></button>
            </div>
        )
    }
}

export default CreateUserButton