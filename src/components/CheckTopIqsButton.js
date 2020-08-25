import React, { Component } from 'react'

class CheckTopIqsButton extends Component {

    handleClick(event) {
        event.preventDefault()
        this.props.checkTopIqs(this.props.userId)
    }
    

    render () {
        return (
            <button className="button" onClick={(event) => this.handleClick(event)}>Check Top Iqs</button>
        )
    }
}

export default CheckTopIqsButton