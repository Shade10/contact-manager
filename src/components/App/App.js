import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import ContactManager from "../ContactManager";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
          </ul>

          <Route exact path="/" component={ContactManager}/>
          {/* <Route path="/ContactManager" component={ContactManager} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
