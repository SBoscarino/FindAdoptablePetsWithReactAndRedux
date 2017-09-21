import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomeComponent from './components/home.js';
import CatsComponent from './components/cats.js';
import DogsComponent from './components/dogs.js';


export default class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className="app">
            <nav>
              <img alt="pawprint" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Paw-print.svg" />
              <h1><NavLink exact={true} activeClassName='active' to="/">Home</NavLink></h1>
              <h1><NavLink activeClassName='is-active' to="/cats">Search For Cats</NavLink></h1>
              <h1><NavLink activeClassName='is-active' to="/dogs">Search For Dogs</NavLink></h1>
            </nav>
            <div className="main-content">
              <div>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/cats" component={CatsComponent} />
                <Route path="/dogs" component={DogsComponent} />
              </div>
            </div>
            <footer>
              Made by Stefanie Boscarino 2017 With React/Redux.
              Uses the PetFinder API.
            </footer>
          </div>
        </Router>
      </Provider>


    );
  }
}
