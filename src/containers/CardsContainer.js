import React, { Component } from 'react'
import Cards from '../components/Cards'
import SignupInput from '../components/SignupInput'
import User from '../components/User'
import { connect } from 'react-redux'

class CardsContainer extends Component {
    render() {
        return (
            <div className='final-container'>
              <h1>IQ Card Memory Game</h1>
              <SignupInput addUser={this.props.addUser} submitted={this.props.submitted}/>
              {this.props.submitted && <User currentUser={this.props.currentUser}/>}
              <Cards />
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser, submitted: state.submitted })

const mapDispatchToProps = dispatch => ({
  addUser: username => dispatch({type: 'ADD_USER', username}),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)