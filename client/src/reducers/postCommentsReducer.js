import { TOGGLE_POST_COMMENT_UPLOAD_MODE } from "../constants/postCommentsConstants";
import {
  SET_POST_COMMENT,
  POST_COMMENT_UPLOAD_SUCCESS,
  POST_COMMENT_UPDATE_SUCCESS
} from "../constants/postConstants";

const initialState = {
  isEnabledCreating: true,
  currentComment: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_POST_COMMENT:
      return {
        ...state,
        currentComment: {
          ...state.currentComment,
          ...payload
        }
      };
    case POST_COMMENT_UPDATE_SUCCESS:
    case POST_COMMENT_UPLOAD_SUCCESS:
      return {
        ...state,
        currentComment: initialState.currentComment
      };
    case TOGGLE_POST_COMMENT_UPLOAD_MODE:
      return {
        ...state,
        isEnabledCreating: payload
      };
    default:
      return state;
  }
};
