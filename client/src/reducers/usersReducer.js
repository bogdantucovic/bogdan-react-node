import {
  USERS_REQUEST_BY_USER_ID,
  USERS_REQUEST_BY_USER_ID_SUCCESS
} from "../constants/usersConstants";

const initialState = {
  error: false,
  data: null,
  isFetching: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USERS_REQUEST_BY_USER_ID:
      return {
        ...state,
        isFetching: true
      };
    case USERS_REQUEST_BY_USER_ID_SUCCESS:
      return {
        ...state,
        data: payload,
        isFetching: false
      };
    default:
      return state;
  }
};
