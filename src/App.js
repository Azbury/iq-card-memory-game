import React from 'react'
import './App.css'
import CardsContainer from './containers/CardsContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/game" component={CardsContainer} />
      </div>
    </Router>
  )
}

export default App;
