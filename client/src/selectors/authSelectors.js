import { createSelector } from 'reselect';

export const authSelector = state => state.auth;

export const isAuthenticatedSelector = createSelector(
  authSelector,
  auth => auth.isAuthenticated
);

export const authUserSelector = createSelector(
  authSelector,
  auth => auth.user
);

export const authUserIdSelector = createSelector(
  authUserSelector,
  user => user.id
);