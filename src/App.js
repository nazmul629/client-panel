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
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import Settings from './settings/Settings'
import {UserIsAuthenticated, UserIsNotAuthenticated} from './halpers/auth'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={UserIsAuthenticated(Dashboard)}></Route>
              <Route exact path='/client/add' component={UserIsAuthenticated(AddClient)}></Route>
              <Route exact path='/client/:id' component={UserIsAuthenticated(ClientDetails)}></Route>

              <Route exact path='/client/edit/:id' component={UserIsAuthenticated(EditClient)}></Route>

              <Route exact path='/settings' component={UserIsAuthenticated(Settings)}></Route>

              <Route exact path='/login' component={UserIsNotAuthenticated(Login)}></Route>
              <Route exact path='/registration' component={UserIsNotAuthenticated(Registration)}></Route>
      

            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
