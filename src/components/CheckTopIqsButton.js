import React, { Component } from 'react'
import { checkTopIqs } from '../actions/checkTopIqs'

class CheckTopIqsButton extends Component {

    handleClick(event) {
        event.preventDefault()
        this.props.checkTopIqs(this.props.userId)
    }
    

    render () {
        return (
            <button onClick={(event) => this.handleClick(event)}>Check Top Iqs</button>
        )
    }
}

export default CheckTopIqsButton