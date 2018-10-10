import { createSelector } from 'reselect';

export const loginSelector = state => state.login;

export const loginErrorsSelector = createSelector(
  loginSelector,
  login => login.errors
);