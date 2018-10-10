import { TOGGLE_POST_COMMENT_UPLOAD_MODE } from '../constants/postCommentsConstants';

export const togglePostCommentUploadMode = (payload) => ({
  type: TOGGLE_POST_COMMENT_UPLOAD_MODE,
  payload
});