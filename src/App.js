import React from 'react'
import './App.css'
import CardsContainer from './containers/CardsContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar';
import UserContainer from './containers/UserContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/game" component={CardsContainer} />
        <Route exact path="/user" component={UserContainer} />
      </div>
    </Router>
  )
}

export default App;
