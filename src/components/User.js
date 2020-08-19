import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div className="current-user">
                <h2>Username: {this.props.currentUser.username}</h2>
            </div>
        )
    }
}

export default User