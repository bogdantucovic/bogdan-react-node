import { CHANGE_PAGE } from "../constants/commonConstants";
import {
  UPLOAD_SUCCESS,
  UPLOAD_DELETE_SUCCESS
} from "../constants/uploadConstants";
import {
  POST_UPLOAD_SUCCESS,
  POST_DELETE_SUCCESS,
  POST_UPDATE_SUCCESS,
  POST_COMMENT_UPDATE_SUCCESS,
  POST_COMMENT_UPLOAD_SUCCESS,
  POST_COMMENT_DELETE_SUCCESS,
  POST_REQUEST,
  POST_SUCCESS,
  POST_FAILURE,
  SET_POST_IMAGE_VIEW,
  SET_POST
} from "../constants/postConstants";

const initialState = {
  error: false,
  items: [],
  isFetching: false,
  total: 0,
  page: 1,
  editablePost: {},
  newPost: {},
  hasImagesOnly: false
};

export default (state = initialState, action) => {
  const { type, payload, page, fileName, resource } = action;

  if (resource && resource === "posts") {
    if (type === UPLOAD_DELETE_SUCCESS) {
      if (action.action === "update") {
        return {
          ...state,
          editablePost: {
            ...state.editablePost,
            img: ""
          }
        };
      } else if (action.action === "create") {
        return {
          ...state,
          newPost: {
            ...state.newPost,
            img: ""
          }
        };
      }
    } else if (type === UPLOAD_SUCCESS) {
      if (action.action === "update") {
        return {
          ...state,
          editablePost: {
            ...state.editablePost,
            img: fileName
          }
        };
      } else if (action.action === "create") {
        return {
          ...state,
          newPost: {
            ...state.newPost,
            img: fileName
          }
        };
      }
    } else if (type === CHANGE_PAGE) {
      return {
        ...state,
        page
      };
    }
  }

  switch (type) {
    case POST_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case SET_POST_IMAGE_VIEW:
      return {
        ...state,
        hasImagesOnly: payload
      };
    case SET_POST:
      return {
        ...state,
        editablePost: {
          ...state.editablePost,
          ...payload.editablePost
        },
        newPost: {
          ...state.newPost,
          ...payload.newPost
        }
      };
    case POST_UPLOAD_SUCCESS:
      return {
        ...state,
        items: [...state.items, payload],
        newPost: initialState.newPost,
        total: state.total + 1
      };
    case POST_COMMENT_UPLOAD_SUCCESS: {
      const { comment } = payload;

      let items = [...state.items];
      const index = items.findIndex(val => val.post_id == comment.post_id);
      items[index] = {
        ...items[index],
        comments: [...items[index].comments, comment]
      };

      return {
        ...state,
        items
      };
    }
    case POST_COMMENT_DELETE_SUCCESS: {
      const { postId, commentId } = payload;

      let items = [...state.items];
      const index = items.findIndex(val => val.post_id == postId);
      const commentIndex = items[index].comments.findIndex(
        comment => comment.comment_id == commentId
      );

      items[index] = {
        ...items[index],
        comments: [
          ...items[index].comments.slice(0, commentIndex),
          ...items[index].comments.slice(commentIndex + 1)
        ]
      };

      return {
        ...state,
        items
      };
    }
    case POST_UPDATE_SUCCESS:
      const { post } = payload;
      let items = [...state.items];
      const index = items.findIndex(item => item.post_id == post.post_id);

      items[index] = {
        ...items[index],
        ...post
      };

      return {
        ...state,
        items,
        editablePost: initialState.editablePost
      };
    case POST_COMMENT_UPDATE_SUCCESS: {
      const { comment } = payload;

      let items = [...state.items];
      const index = items.findIndex(post => post.post_id == comment.post_id);
      const commentIndex = items[index].comments.findIndex(
        e => e.comment_id == comment.comment_id
      );

      items[index] = {
        ...items[index],
        comments: [
          ...items[index].comments.map(
            (com, ind) => (ind !== commentIndex ? com : { ...com, ...comment })
          )
        ]
      };

      return {
        ...state,
        items
      };
    }
    case POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...payload,
        error: initialState.error
      };
    case POST_DELETE_SUCCESS:
      return {
        ...state,
        total: state.total - 1,
        items: state.items.filter(val => val.post_id != payload.postId)
      };
    case POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        items: initialState.items,
        error: true
      };
    default:
      return state;
  }
};
