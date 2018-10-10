import { createSelector } from 'reselect';

export const registrationSelector = state => state.registration;

export const registrationErrorsSelector = createSelector(
  registrationSelector,
  registration => registration.errors
);

export const registrationSuccessMsgSelector = createSelector(
  registrationSelector,
  registration => registration.successMsg
);