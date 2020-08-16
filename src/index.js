import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import manageUser from './reducers/manageUser'
import Particles from 'particlesjs'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(manageUser, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <App />,
    </Provider>,
  document.getElementById('root')
);

window.onload= function() {
  Particles.init({
    selector: '.background',
    maxParticles: 500,
    color: ['#DC143C','00FF00', 'FFFF00', '008B8B'],
    connectParticles: true
});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
