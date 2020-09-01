import React, { Component } from 'react'

//SignupInput
//Holds the form for a user to sign up with their username
class SignupInput extends Component {
    state = {
      username: '',
    }

    handleOnChange(event) {
      this.setState({
        username: event.target.value,
      })
    }

    handleOnSubmit(event) {
      event.preventDefault()
      this.props.addUser(this.state.username)
      this.setState({
        username: ''
      })
    }

    render() {
      return (
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <p className="user-form">Please Enter Your Username</p>
            <input
              type="text"
              value={this.state.username}
              onChange={(event) => this.handleOnChange(event)} />
            <br></br>
            <br></br>
            <input className="button" type="submit" />
          </form>
        </div>
      )
    }
}

export default SignupInput;