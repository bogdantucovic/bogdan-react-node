import {
  REGISTRATION_REQUEST,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS,
  RESET_REGISTRATION_STATE
} from '../constants/registrationConstrants';

export const registrationStart = (body) => {
  body = JSON.stringify(body);

  return ({
    type: REGISTRATION_REQUEST,
    endpoint: '/auth/register',
    fetchOptions: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    }
  })
}


export const registrationError = (errors) => ({
  type: REGISTRATION_FAILURE,
  errors
});

export const registrationSuccess = (payload) => ({
  type: REGISTRATION_SUCCESS,
  payload
});
