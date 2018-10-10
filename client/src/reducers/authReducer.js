import { DEAUTHENTICATE } from '../constants/authConstants';
import {
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/loginConstrants';

const initialState = {
  isAuthenticated: false,
  user: {},
  token: ''
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case LOGIN_SUCCESS: 
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        token: payload.token
      }
    case LOGOUT:
    case LOGIN_FAILURE:
    case DEAUTHENTICATE:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: ''
      }
    default:
      return state;
  }
}
