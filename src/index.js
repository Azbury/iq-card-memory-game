import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import manageUser from './reducers/manageUser'
import Particles from 'particlesjs'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(manageUser, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

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
    color: ['#FFE4C4'],
    connectParticles: false
});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
