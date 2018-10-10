import {
  USERS_REQUEST_BY_USER_ID,
  USERS_REQUEST_BY_USER_ID_SUCCESS
} from "../constants/usersConstants";

export const usersFetchStartByUserId = userId => ({
  type: USERS_REQUEST_BY_USER_ID,
  endpoint: `/api/users/${userId}`,
  fetchOptions: {
    method: "GET"
  }
});

export const userFetchSuccess = payload => ({
  type: USERS_REQUEST_BY_USER_ID_SUCCESS,
  payload
});
