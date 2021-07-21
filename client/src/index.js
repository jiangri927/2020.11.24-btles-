import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/paper-kit.css";
import "assets/css/style.css";
import "assets/demo/demo.css";
import "assets/css/bitles.scss";
// pages
import LandingPage from "views/examples/LandingPage.js";
import Register from "components/Auth/Register";
import Login from "components/Auth/Login";
import Dashboard from "components/Dashboard/Dashboard";
import PrivateRoute from "./components/private-route/PrivateRoute";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
// others
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
