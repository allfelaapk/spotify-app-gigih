import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/home/Home';
import AuthLogin from '../pages/auth/AuthLogin';

export default function SpotRouter() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          {token ? <Redirect to="/home" /> : <AuthLogin />}
        </Route>
      </Switch>
    </Router>
  );
}
