import React, { Component } from 'react'
import Cards from '../components/Cards'
import SignupInput from '../components/SignupInput'
import { connect } from 'react-redux'

class CardsContainer extends Component {
    render() {
        return (
            <div>
              <SignupInput addUser={this.props.addUser}/>
              <Cards />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  addUser: username => dispatch({type: 'ADD_USER', username}),
})

export default connect(null, mapDispatchToProps)(CardsContainer)