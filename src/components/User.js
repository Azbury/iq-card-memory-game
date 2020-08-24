import React, { Component } from 'react';

class User extends Component {
    render() {
        let iqList = this.props.iqs.map(iq => iq.iq)

        return (
            <div className="current-user">
                <h2>Username: {this.props.currentUser.username}</h2>
                <h2>Top IQ Scores</h2>
                {iqList}
            </div>
        )
    }
}

export default User