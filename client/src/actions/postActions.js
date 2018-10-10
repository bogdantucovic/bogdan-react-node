import {
  SET_POST,
  SET_POST_COMMENT,
  SET_POST_IMAGE_VIEW,
  POST_REQUEST,
  POST_SUCCESS,
  POST_FAILURE,
  POST_UPLOAD_REQUEST,
  POST_UPLOAD_SUCCESS,
  POST_UPLOAD_FAILURE,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAILURE,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAILURE,
  POST_COMMENT_UPLOAD_REQUEST,
  POST_COMMENT_UPLOAD_SUCCESS,
  POST_COMMENT_UPLOAD_FAILURE,
  POST_COMMENT_DELETE_REQUEST,
  POST_COMMENT_DELETE_SUCCESS,
  POST_COMMENT_DELETE_FAILURE,
  POST_COMMENT_UPDATE_REQUEST,
  POST_COMMENT_UPDATE_SUCCESS,
  POST_COMMENT_UPDATE_FAILURE
} from "../constants/postConstants";

/**
 *               POST FETCH
 *  ------------------------------------------
 */
export const postFetchStart = (page, limit, userId) => ({
  type: POST_REQUEST,
  endpoint: `/api/posts/?user_id=${userId}&page=${page}&limit=${limit}`,
  fetchOptions: {
    method: "GET"
  }
});
export const postFetchSuccess = payload => ({
  type: POST_SUCCESS,
  payload
});
export const postFetchFailure = error => ({
  type: POST_FAILURE,
  error
});

/**
 *               POST UPLOAD
 *  ------------------------------------------
 */
export const postUploadRequest = body => {
  body = JSON.stringify(body);

  return {
    type: POST_UPLOAD_REQUEST,
    endpoint: "/api/posts",
    fetchOptions: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    }
  };
};

export const postUploadSuccess = payload => ({
  type: POST_UPLOAD_SUCCESS,
  payload
});
export const postUploadFailure = payload => ({
  type: POST_UPLOAD_FAILURE,
  payload
});

/**
 *               POST DELETE
 *  ------------------------------------------
 */
export const postDeleteRequest = postId => ({
  type: POST_DELETE_REQUEST,
  endpoint: `/api/posts/${postId}`,
  fetchOptions: {
    method: "DELETE"
  }
});

export const postDeleteSuccess = payload => ({
  type: POST_DELETE_SUCCESS,
  payload
});
export const postDeleteFailure = payload => ({
  type: POST_DELETE_FAILURE,
  payload
});

/**
 *               POST UPDATE
 *  ------------------------------------------
 */
export const postUpdateRequest = (postId, body) => {
  body = JSON.stringify(body);

  return {
    type: POST_UPDATE_REQUEST,
    endpoint: `/api/posts/${postId}`,
    fetchOptions: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body
    }
  };
};

export const postUpdateSuccess = payload => ({
  type: POST_UPDATE_SUCCESS,
  payload
});
export const postUpdateFailure = payload => ({
  type: POST_UPDATE_FAILURE,
  payload
});

/**
 *               POST COMMENT UPLOAD
 *  ------------------------------------------
 */
export const postCommentUploadRequest = (postId, body) => {
  body = JSON.stringify(body);
  return {
    type: POST_COMMENT_UPLOAD_REQUEST,
    endpoint: `/api/posts/${postId}/comments`,
    fetchOptions: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    }
  };
};

export const postCommentUploadSuccess = payload => ({
  type: POST_COMMENT_UPLOAD_SUCCESS,
  payload
});
export const postCommentUploadFailure = payload => ({
  type: POST_COMMENT_UPLOAD_FAILURE,
  payload
});

/**
 *               POST COMMENT DELETE
 *  ------------------------------------------
 */
export const postCommentDeleteRequest = (postId, commentId) => ({
  type: POST_COMMENT_DELETE_REQUEST,
  endpoint: `/api/posts/${postId}/comments/${commentId}`,
  fetchOptions: {
    method: "DELETE"
  }
});
export const postCommentDeleteSuccess = payload => ({
  type: POST_COMMENT_DELETE_SUCCESS,
  payload
});
export const postCommentDeleteFailure = payload => ({
  type: POST_COMMENT_DELETE_FAILURE,
  payload
});

/**
 *               POST COMMENT UPDATE
 *  ------------------------------------------
 */
export const postCommentUpdateRequest = (postId, commentId, body) => {
  body = JSON.stringify(body);

  return {
    type: POST_COMMENT_UPDATE_REQUEST,
    endpoint: `/api/posts/${postId}/comments/${commentId}`,
    fetchOptions: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body
    }
  };
};
export const postCommentUpdateSuccess = payload => ({
  type: POST_COMMENT_UPDATE_SUCCESS,
  payload
});
export const postCommentUpdateFailure = payload => ({
  type: POST_COMMENT_UPDATE_FAILURE,
  payload
});

/**
 *               SET
 *  ------------------------------------------
 */
export const setPost = payload => ({
  type: SET_POST,
  payload
});
export const setPostComment = payload => ({
  type: SET_POST_COMMENT,
  payload
});
export const setPostImageView = payload => ({
  type: SET_POST_IMAGE_VIEW,
  payload
});
