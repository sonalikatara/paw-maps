import React, { Component } from 'react';
import { Switch, Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
        <p>
        <span className="link" >
         <Link to="/">Home</Link>
        </span>
        <span className="link">
         <Link to="/about">About</Link>
        </span>
        <span className="link">
          <Link to="/settings">Settings</Link>
        </span>
        </p>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>

    </div>
);

const Home = (props) => (
  <Page title="Static Maps - guide you where every you are .."/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {

  render() {
    const browserHistory = createBrowserHistory();
    return (
      <Switch >
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
      </Switch>
    );
  }
}

export default App;