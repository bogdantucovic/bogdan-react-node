import { put, call, takeEvery } from 'redux-saga/effects';
import api from '../api';
import { 
  UPLOAD_REQUEST, 
  UPLOAD_SUCCESS, 
  UPLOAD_FAILURE,

  UPLOAD_DELETE_REQUEST,
  UPLOAD_DELETE_SUCCESS,
  UPLOAD_DELETE_FAILURE
} from '../constants/uploadConstants';

function* uploading ({ resource, action, ...apiProps }) {
  try {
    const { fileName, error } = yield call(api, {...apiProps});

    if (error) {      
      yield put({type: UPLOAD_FAILURE });
    } else {
      yield put({type: UPLOAD_SUCCESS, fileName, resource, action });
    }
  } catch (err) {
      yield put({type: UPLOAD_FAILURE });
  }
}

function* uploadDeleting ({ resource, action, ...apiProps }) {
  try {
    const { error } = yield call(api, {...apiProps});

    if (error) {      
      yield put({type: UPLOAD_DELETE_FAILURE });
    } else {
      yield put({type: UPLOAD_DELETE_SUCCESS, resource, action });
    }
  } catch (err) {
      yield put({type: UPLOAD_DELETE_FAILURE });
  }
}

export default function* uploadWorker() {
  yield takeEvery(UPLOAD_REQUEST, uploading);
  yield takeEvery(UPLOAD_DELETE_REQUEST, uploadDeleting)
}
