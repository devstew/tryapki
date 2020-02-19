import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";

class App extends Component {
  render() {
    return <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={Shop}/>
      </Switch>
    </div>;
  }
}

export default App;
