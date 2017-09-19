import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomeComponent from './components/home.js';
import CatsComponent from './components/cats.js';


export default class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className="app">
            <header>
              <h1><Link to="/">HomeComponent</Link></h1>
            </header>
            <div className="main-content">
              <div>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/cats" component={CatsComponent} />
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
