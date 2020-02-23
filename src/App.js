import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from './components/header/Header';

class App extends Component {
  render() {
    return <div>
      <Header>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
      </Header>
    </div>;
  }
}

export default App;
