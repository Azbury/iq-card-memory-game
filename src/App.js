import React, { Component } from 'react'
import './App.css'
import GameContainer from './containers/GameContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import CreateUserButton from './components/CreateUserButton';
import UserContainer from './containers/UserContainer';
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <div className="title">IQ Card Memory Game</div>
          {!this.props.clickedCreateUser && <CreateUserButton clickCreateUserButton={this.props.clickCreateUserButton}/>}
          <Route exact path="/game" component={GameContainer} />
          <Route exact path="/user" component={UserContainer} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({ clickedCreateUser: state.clickedCreateUser})

const mapDispatchToProps = dispatch => ({ clickCreateUserButton: () => dispatch({type: 'CLICK_CREATE_USER_BUTTON'})})

export default connect(mapStateToProps, mapDispatchToProps)(App)
