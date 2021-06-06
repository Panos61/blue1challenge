import React from 'react';
import './App.global.css';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import { Login, Home } from './pages/index';
import PrivateRoute from './utils/PrivateRoute';
import history from './utils/history';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path='/'>
          <Home />
        </PrivateRoute>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
