import { put, call, takeEvery } from "redux-saga/effects";
import api from "../api";
import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_FAILURE,
  POST_UPLOAD_REQUEST,
  POST_UPLOAD_FAILURE,
  POST_UPLOAD_SUCCESS,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAILURE,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAILURE
} from "../constants/postConstants";

function* postFetching(action) {
  try {
    const { success, ...payload } = yield call(api, action);

    if (success) {
      yield put({ type: POST_SUCCESS, payload });
    } else {
      yield put({ type: POST_FAILURE, error: true });
    }
  } catch (err) {
    yield put({ type: POST_FAILURE, error: true });
  }
}

function* postDeleting(action) {
  try {
    const { success, postId } = yield call(api, action);

    if (success) {
      yield put({ type: POST_DELETE_SUCCESS, payload: { postId } });
    } else {
      yield put({ type: POST_DELETE_FAILURE });
    }
  } catch (err) {
    yield put({ type: POST_DELETE_FAILURE });
  }
}

function* postUploading(action) {
  try {
    const { success, payload } = yield call(api, action);

    if (success) {
      yield put({ type: POST_UPLOAD_SUCCESS, payload });
    } else {
      yield put({ type: POST_UPLOAD_FAILURE });
    }
  } catch (err) {
    yield put({ type: POST_UPLOAD_FAILURE });
  }
}

function* postUpdating(action) {
  try {
    const { success, post } = yield call(api, action);

    if (success) {
      yield put({ type: POST_UPDATE_SUCCESS, payload: { post } });
    } else {
      yield put({ type: POST_UPDATE_FAILURE });
    }
  } catch (err) {
    yield put({ type: POST_UPDATE_FAILURE });
  }
}

export default function* postWorker() {
  yield takeEvery(POST_REQUEST, postFetching);
  yield takeEvery(POST_UPLOAD_REQUEST, postUploading);
  yield takeEvery(POST_DELETE_REQUEST, postDeleting);
  yield takeEvery(POST_UPDATE_REQUEST, postUpdating);
}
