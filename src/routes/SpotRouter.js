<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
<<<<<<< HEAD
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/home/Home';
import AuthLogin from '../pages/auth/AuthLogin';
=======
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/home/Home";
import AuthLogin from "../pages/auth/AuthLogin";
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60

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
