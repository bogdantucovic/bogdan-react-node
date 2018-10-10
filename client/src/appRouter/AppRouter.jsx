import React from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { Router, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import {
  isAuthenticatedSelector,
  authUserSelector
} from "../selectors/authSelectors";

// router components
import LoggedOutRoute from "./LoggedOutRoute";
import PrivateRoute from "./PrivateRoute";
import NotFoundRoute from "./NotFoundRoute";

import Loader from "../components/UIcomponents/Loader";

const Home = Loadable({
  loader: () => import("../pages/Home"),
  loading: Loader
});
const Posts = Loadable({
  loader: () => import("../pages/Posts"),
  loading: Loader
});
const User = Loadable({
  loader: () => import("../pages/User"),
  loading: Loader
});
const Registration = Loadable({
  loader: () => import("../pages/Registration"),
  loading: Loader
});
const Login = Loadable({
  loader: () => import("../pages/Login"),
  loading: Loader
});

const history = createBrowserHistory();

const AppRouter = ({ dispatch, ...props }) => (
  <Router history={history}>
    <Switch>
      <PrivateRoute {...props} path="/" component={Home} exact />
      <LoggedOutRoute {...props} path="/signup" component={Registration} />
      <LoggedOutRoute
        {...props}
        path="/login"
        redirectTo={`/users/${props.user.id}`}
        component={Login}
      />
      <PrivateRoute {...props} path="/users/:userid" component={User} />
      <PrivateRoute {...props} exact path="/posts" component={Posts} />
      <NotFoundRoute />
    </Switch>
  </Router>
);

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticatedSelector(state),
  user: authUserSelector(state)
});

export default connect(mapStateToProps)(AppRouter);
