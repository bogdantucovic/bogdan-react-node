import { put, call, takeEvery } from "redux-saga/effects";
import api from "../api";
import { TOGGLE_POST_COMMENT_UPLOAD_MODE } from "../constants/postCommentsConstants";
import {
  POST_COMMENT_UPDATE_REQUEST,
  POST_COMMENT_UPDATE_SUCCESS,
  POST_COMMENT_UPDATE_FAILURE,
  POST_COMMENT_UPLOAD_REQUEST,
  POST_COMMENT_UPLOAD_SUCCESS,
  POST_COMMENT_UPLOAD_FAILURE,
  POST_COMMENT_DELETE_REQUEST,
  POST_COMMENT_DELETE_SUCCESS,
  POST_COMMENT_DELETE_FAILURE
} from "../constants/postConstants";

function* postCommentUploading(action) {
  try {
    const { success, comment } = yield call(api, action);

    if (success) {
      yield put({ type: POST_COMMENT_UPLOAD_SUCCESS, payload: { comment } });
    } else {
      yield put({ type: POST_COMMENT_UPLOAD_FAILURE });
    }
  } catch (err) {
    yield put({ type: POST_COMMENT_UPLOAD_FAILURE });
  }
}

function* postCommentDeleting(action) {
  try {
    const { success, postId, commentId } = yield call(api, action);

    if (success) {
      yield put({
        type: POST_COMMENT_DELETE_SUCCESS,
        payload: { postId, commentId }
      });
    } else {
      yield put({ type: POST_COMMENT_DELETE_FAILURE });
    }
  } catch (err) {
    yield put({ type: POST_COMMENT_DELETE_FAILURE });
  }
}

function* postCommentUpdating(action) {
  try {
    const { success, comment } = yield call(api, action);

    if (success) {
      yield put({ type: POST_COMMENT_UPDATE_SUCCESS, payload: { comment } });
    } else {
      yield put({ type: POST_COMMENT_UPDATE_FAILURE });
    }
  } catch (err) {
    yield put({ type: POST_COMMENT_UPDATE_FAILURE });
  }
}

function* postCommentUpdatingSuccess() {
  yield put({ type: TOGGLE_POST_COMMENT_UPLOAD_MODE, payload: true });
}

export default function* postCommentsWorker() {
  yield takeEvery(POST_COMMENT_UPLOAD_REQUEST, postCommentUploading);
  yield takeEvery(POST_COMMENT_DELETE_REQUEST, postCommentDeleting);
  yield takeEvery(POST_COMMENT_UPDATE_REQUEST, postCommentUpdating);
  yield takeEvery(POST_COMMENT_UPDATE_SUCCESS, postCommentUpdatingSuccess);
}
