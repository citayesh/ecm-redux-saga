import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shoppage/ShopPage.componet';
import Header from './components/header/Header.component';
import SigninUp from './pages/sign-in-up-page/SigninUp.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/shop" component={ShopPage} />
         <Route exact path="/signin" component={SigninUp} />

      </Switch>
      </div>
  );
}


export default App;
