import React, { useState, useEffect, useRef } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shoppage/ShopPage.componet';
import Header from './components/header/Header.component';
import SigninUp from './pages/sign-in-up-page/SigninUp.component';
import {auth,creatUserProfileDocument} from './components/firebase/Firebase.utils';

function App() {
  const [currentUser,setCurrentuser]=useState({id:"",data:[]});
  useEffect(() => {
    const subscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{ 
    if (userAuth){
    const userRef= await creatUserProfileDocument(userAuth)
    userRef.onSnapshot(snapShot=>setCurrentuser({id:snapShot.id,data:snapShot.data()}))
    }else{
      setCurrentuser(userAuth)
    }
  })
     return () =>{subscribeFromAuth.abort();
     };
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
