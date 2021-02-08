import React from 'react';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import BudegetCard from './compponets/BudgetCard/BudegetCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
          <BudegetCard/>
          </Route>
          </Switch>
          </Router>
    </div>
  );
}

export default App;
