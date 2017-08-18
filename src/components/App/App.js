import React from 'react';
import logo from './logo.svg';
import './App.css';
import cxn from 'classnames';
import {Link} from 'react-router';

export default class App extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={cxn("App", className)}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/about">About</Link>
      </div>
    );
  }
}