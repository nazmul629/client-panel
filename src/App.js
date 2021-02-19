import React,{Component} from 'react'

import {Provider} from 'react-redux'
import store from './components/store'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppNavbar from './components/layout/AppNavbar'
import Dashboard from './components/layout/DashBoard'


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Dashboard}></Route>
      

            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;