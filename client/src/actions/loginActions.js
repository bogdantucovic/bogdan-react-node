import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT
} from '../constants/loginConstrants';

export const loginStart = (body) => {
  body = JSON.stringify(body);
  return ({
    type: LOGIN_REQUEST,
    endpoint: '/auth/login',
    fetchOptions: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    }
  })
}

export const loginError = (errors) => ({
  type: LOGIN_FAILURE,
  errors
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const logout = () => ({
  type: LOGOUT
});


