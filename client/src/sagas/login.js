import { put, call, takeEvery } from 'redux-saga/effects';
import api from '../api';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/loginConstrants';

function* login (action) {
  const { errors, successMsg, token, user } = yield call(api, action);

  if (errors) {
    yield put({type: LOGIN_FAILURE, errors });
  } else {
    yield put({type: LOGIN_SUCCESS, payload: { successMsg, user, token } });
  }
}

export default function* loginWorker() {
  yield takeEvery(LOGIN_REQUEST, login);
}
