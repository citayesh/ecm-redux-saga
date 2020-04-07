import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage.component';

function App() {
  return (
      <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/shop/hats" component={Hats} />
         <Route path="/hats/:id" component={HatsItem} />

      </Switch>
  );
}

const Hats=()=>(
  <div>
    <h1>hats page</h1>
  </div>
)
const HatsItem=(props)=>(
  <div>
    <h1>hat item page number {props.match.params.id}</h1>
  </div>
)
export default App;
