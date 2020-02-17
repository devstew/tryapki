import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from "./pages/homepage/HomePage";

const HatsPage = () => {
  return(
    <div>
      <h1>HATS</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>;
  }
}

export default App;
