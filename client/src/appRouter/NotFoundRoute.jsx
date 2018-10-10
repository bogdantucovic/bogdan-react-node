import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const NotFoundRoute = () => (
  <Route 
    path="*" 
    render={() => (<Redirect to="/" />)} 
  />
)

export default NotFoundRoute;