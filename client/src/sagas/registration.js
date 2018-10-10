import { put, call, takeEvery } from 'redux-saga/effects';
import api from '../api'
import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE
} from '../constants/registrationConstrants';


function* registration (action) {
  const { errors, successMsg } = yield call(api, action);

  if (errors) {
    yield put({type: REGISTRATION_FAILURE, errors });
  } else {
    yield put({type: REGISTRATION_SUCCESS, payload: {successMsg} });
  }
}

export default function* registrationWorker() {
  yield takeEvery(REGISTRATION_REQUEST, registration);
}