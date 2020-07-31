import React, { Component } from 'react';

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

  //set it up so once a usse submits their username it loads the cards so i can load them into state so then they can be removed when i get matches
  render() {
    return (
      <div>
        <form className={this.state.newUserButton === "active" ? "hidden" : ""} onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>Please enter your username</p>
          <input
            type="text"
            value={this.state.username}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
        <button className={this.state.newUserButton === "active" ? "" : "hidden"} onClick={(event) => this.handleClick(event)}>New User</button>
      </div>
    );
  }
};

export default SignupInput;