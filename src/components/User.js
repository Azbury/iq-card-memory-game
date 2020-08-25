import React, { Component } from 'react';

class User extends Component {
    render() {
        let iqList = this.props.iqs.map(iq => <h2>{iq.iq}</h2>)

        return (
            <div className="current-user">
                <div className="username">{this.props.currentUser.username}</div>
                <h1>Top IQ Scores</h1>
                {iqList}
            </div>
        )
    }

    componentDidMount() {
        this.props.checkTopIqs(this.props.currentUser.id)
    }
}

export default User