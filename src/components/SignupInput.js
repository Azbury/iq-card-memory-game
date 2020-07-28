import React, { Component } from 'react';

class SignupInput extends Component {
  state = {
    username: ''
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
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.username}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default SignupInput;