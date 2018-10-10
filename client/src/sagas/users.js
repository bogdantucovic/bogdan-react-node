import { put, call, takeEvery } from "redux-saga/effects";
import api from "../api";
import {
  USERS_REQUEST_BY_USER_ID,
  USERS_REQUEST_BY_USER_ID_SUCCESS
} from "../constants/usersConstants";

function* userFetching(...apiParams) {
  try {
    const { success, ...payload } = yield call(api, ...apiParams);

    if (success) {
      yield put({ type: USERS_REQUEST_BY_USER_ID_SUCCESS, payload });
    } else {
      yield put({ type: USERS_FAILURE });
    }
  } catch (err) {
    yield put({ type: USERS_FAILURE });
  }
}

export default function* postWorker() {
  yield takeEvery(USERS_REQUEST_BY_USER_ID, userFetching);
}
