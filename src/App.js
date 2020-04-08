import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shoppage/ShopPage.componet';

function App() {
  return (
      <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/shop" component={ShopPage} />

      </Switch>
  );
}


export default App;
