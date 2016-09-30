import React, { Component } from 'react';
import logo from './logo.svg';
import './GolDashboard.sass';

class GolDashboard extends Component {
  render() {
    return (
      <div className="GolDashboard">
        <div className="GolDashboard-header">
          <img src={logo} className="GolDashboard-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="GolDashboard-intro">
          To get started, edit <code>src/GolDashboard.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default GolDashboard;
