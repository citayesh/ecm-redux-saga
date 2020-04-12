import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shoppage/ShopPage.componet';
import Header from './components/header/Header.component';
import SigninUp from './pages/sign-in-up-page/SigninUp.component';
import { auth } from './components/firebase/Firebase.utils';

function App() {
  const [currentUser,setCurrentuser]=useState(null);
  useEffect(() => {
   const subscribeFromAuth=auth.onAuthStateChanged(user =>{setCurrentuser(user)
    console.log(user)});
        return () => {
        subscribeFromAuth.unsubscribe(); };
  },[]);
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/shop" component={ShopPage} />
         <Route exact path="/signin" component={SigninUp} />
      </Switch>
      </div>
  );
}


export default App;
