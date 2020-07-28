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
    event.preventDefault();
    this.props.addUser(this.state.username);
    this.setState({
      username: '',
      newUserButton: 'active'
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>Please enter your username</p>
          <input
            type="text"
            value={this.state.username}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
        <button className={this.state.newUserButton === "active" ? "" : "hidden"}>New User</button>
      </div>
    );
  }
};

export default SignupInput;