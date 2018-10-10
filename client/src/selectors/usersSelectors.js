import { createSelector } from "reselect";

export const usersSelector = state => state.users;

export const usersFetchingSelector = createSelector(
  usersSelector,
  users => users.isFetching
);

export const userSelector = createSelector(usersSelector, users => users.data);
