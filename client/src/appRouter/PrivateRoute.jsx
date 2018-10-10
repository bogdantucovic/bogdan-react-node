import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../Layout.jsx';

const PrivateRoute = ({ 
  component: Component, 
  isAuthenticated,
  redirectTo,
  user,
  ...rest 
}) => (
  <Route {...rest} render={(routeProps) => (
    isAuthenticated ? (
      <Layout {...routeProps}
        user={user}
        isAuthenticated={isAuthenticated}
        mainComponent={(props) => (<Component {...props} {...routeProps} /> )} 
      />
    ) : (
      <Redirect to={{
        pathname: redirectTo
      }}/>
    )
  )}/>
)

PrivateRoute.defaultProps = {
  redirectTo: '/signup'
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default PrivateRoute;