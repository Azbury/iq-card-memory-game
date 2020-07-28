import React, { Component } from 'react';

class User extends Component {
    render() {
        const { currentUser } = this.props
        return (
            <div className="current-user">
                {currentUser}
            </div>
        )
    }
}

export default User