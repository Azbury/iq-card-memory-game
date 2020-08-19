import React, { Component } from 'react'

class NewUserButton extends Component {

    handleClick(event) {
        event.preventDefault()
        this.props.newUser("hi")
    }
    

    render () {
        return (
            <button onClick={(event) => this.handleClick(event)}>New User</button>
        )
    }
}

export default NewUserButton