import React from 'react'
import './App.css'
import CardsContainer from './containers/CardsContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/game" component={CardsContainer} />
      </div>
    </Router>
  )
}

export default App;
