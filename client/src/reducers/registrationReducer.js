import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE
} from '../constants/registrationConstrants';

const initialState = {
  isFetching: false,
  successMsg: '', 
  errors: {
    name: '',
    email: '',
    password: '',
    global: ''
  }
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case REGISTRATION_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        errors: initialState.errors,
        ...payload
      }
    case REGISTRATION_FAILURE:
      return {
        ...state,
        isFetching: false,
        successMsg: initialState.successMsg,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }
    default:
      return state;
  }
}

