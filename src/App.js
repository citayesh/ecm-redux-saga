import React, { useEffect } from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shoppage/ShopPage.componet';
import Header from './components/header/Header.component';
import SigninUp from './pages/sign-in-up-page/SigninUp.component';
import {useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from './redux/user/user.action';
import {selecetCurrentUser} from "./redux/user/user.selector"
import CheckoutPage from './pages/checkout/CheckoutPage.component';


function App (){
  const dispatch=useDispatch();
  const currentUser=useSelector(state =>selecetCurrentUser(state))

 useEffect(()=>{
  dispatch(checkUserSession())
   },[dispatch])
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
                currentUser ? (
                <Redirect to='/' />
              ) : (
                <SigninUp />
              )
            }
          />
        </Switch>
      </div>
    );
  
  }  
  export default App;