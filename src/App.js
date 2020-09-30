import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Posts from './components/Posts/Posts';
import Photos from './components/Photos/Photos';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
          <Switch>
            <Route path='/homepage'>
              <Homepage />
            </Route>
            <Route path='/posts'>
              <Posts />
            </Route>
            <Route path='/photos'>
              <Photos />
            </Route>
            <Route path='/contacts'>
              <Contacts />
            </Route>
            <Route exact path='/'>
              <Redirect to='/homepage' />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
