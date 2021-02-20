import React,{Component} from 'react'
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppNavbar from './components/layout/AppNavbar'
import Dashboard from './components/layout/Dashboard'
import './App.css';
import AddClient from './components/clients/AddClient'
import ClientDetails from './components/clients/ClientDetails'
import EditClient from './components/clients/EditClient'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Dashboard}></Route>
              <Route exact path='/client/add' component={AddClient}></Route>
              <Route exact path='/client/:id' component={ClientDetails}></Route>

              <Route exact path='/client/edit/:id' component={EditClient}></Route>
      

            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
