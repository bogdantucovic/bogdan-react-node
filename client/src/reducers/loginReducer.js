import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../constants/loginConstrants';

const initialState = {
  isFetching: false,
  successMsg: '', 
  errors: {
    global: '',
    password: '',
    email: ''
  }
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case LOGIN_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        errors: initialState.errors,
        successMsg: payload.successMsg
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        successMsg: initialState.successMsg,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }
    case LOGOUT:
      return {
        ...initialState
      }
    default:
      return state;
  }
}


