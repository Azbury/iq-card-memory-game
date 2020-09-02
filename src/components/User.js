import React, { Component } from 'react';

//User
//Displays data for the user
class User extends Component {
    render() {
        //sorted listed of all the iqs of a specific user
        let iqList = this.props.iqs.map(iq => <h2>{iq.iq}</h2>).sort(function(a, b){return b-a})

        return (
            <div className="current-user">
                <div className="username">{this.props.currentUser.username}</div>
                <h1>Top IQ Scores</h1>
                {iqList}
            </div>
        )
    }

    //will loads iq list into store when component mounts
    componentDidMount() {
        this.props.checkTopIqs(this.props.currentUser.id)
    }
}

export default User