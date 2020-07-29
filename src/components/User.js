import React, { Component } from 'react';

class User extends Component {
    render() {
        const { currentUser } = this.props
        return (
            <div className="current-user">
                <h2>Username: {currentUser.username}</h2>
                <h2>IQ: {currentUser.iq}</h2>
            </div>
        )
    }
}

export default User