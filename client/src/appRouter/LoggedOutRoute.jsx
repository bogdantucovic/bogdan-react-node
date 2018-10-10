import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../Layout.jsx';

const LoggedOutRoute = ({ 
  component: Component, 
  isAuthenticated, 
  redirectTo,
  user,
  ...rest 
}) => (
  <Route {...rest} render={(routeProps) => (
    isAuthenticated ? (
      <Redirect to={redirectTo} />
    ) : (
      <Layout {...routeProps}
        user={user}
        isAuthenticated={isAuthenticated}
        mainComponent={(props) => (<Component {...props} {...routeProps} /> )} 
      />
    )
  )}/>
)

LoggedOutRoute.defaultProps = {
  redirectTo: '/'
}

LoggedOutRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string
}

export default LoggedOutRoute;