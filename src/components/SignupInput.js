import React, { Component } from 'react'

class SignupInput extends Component {
  state = {
    username: '',
    newUserButton: ''
  }

  handleOnChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addUser(this.state.username)
    this.setState({
      username: '',
      newUserButton: 'active'
    })
  }

  handleClick(event) {
    event.preventDefault()
    this.props.newUser(this.state.username)
    this.setState({
      username: '',
      newUserButton: ''
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
        <button className={this.state.newUserButton === "active" ? "" : "hidden"} onClick={(event) => this.handleClick(event)}>New User</button>
      </div>
    );
  }
};

export default SignupInput;