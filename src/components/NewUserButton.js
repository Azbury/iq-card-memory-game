import React, { Component } from 'react'

//NewUserButton
//Button that allows the user to create a new user name or for a new player to start playing the game.
class NewUserButton extends Component {

    handleClick(event) {
        event.preventDefault()
        this.props.newUser()
    }
    

    render () {
        return (
            <button className="button" onClick={(event) => this.handleClick(event)}>New User</button>
        )
    }
}

export default NewUserButton