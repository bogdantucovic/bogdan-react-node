import compact from 'lodash/compact'
import camelCase from 'lodash/camelCase';
import i18n from '../i18n/';

import { 
  REGISTRATION_SUCCESS, 
  REGISTRATION_FAILURE 
} from '../constants/registrationConstrants';
import { 
  LOGIN_SUCCESS,
  LOGIN_FAILURE 
} from '../constants/loginConstrants';
import {
  SET_NOTIFICATION,
  RESET_NOTIFICATION
} from '../constants/notificationConstrants';
import {
  POST_UPLOAD_SUCCESS,
  POST_UPLOAD_FAILURE,

  POST_DELETE_SUCCESS,
  POST_DELETE_FAILURE,

  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAILURE,

  POST_COMMENT_UPLOAD_SUCCESS,
  POST_COMMENT_UPLOAD_FAILURE,

  POST_COMMENT_DELETE_SUCCESS,
  POST_COMMENT_DELETE_FAILURE,

  POST_COMMENT_UPDATE_SUCCESS,
  POST_COMMENT_UPDATE_FAILURE
} from '../constants/postConstants';

const initialState = {
  isOpen: false,
  message: '',
  variant: 'info',
  autoHideDuration: 2500
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  const getApiNotification = (type) => {
    const variant = type.endsWith('SUCCESS') ? 'success' : 'error';
    let messageType = type.split('_');
    messageType = messageType.slice(0,messageType.length - 1);

    return {
      variant,
      message: i18n.t(`api.${camelCase(messageType)}.${variant}`)
    }
  }

  const getRegisterLoginNotification = (action) => {
    const { errors, type } = action;
    const namespace = type.split('_')[0].toLowerCase();

    let errorsMessages = compact(Object.values(errors));
    errorsMessages = errorsMessages.map(item => i18n.t(`${namespace}.errors.${item}`));
   
    return {
      isOpen: errorsMessages.length > 0,
      message: errorsMessages.join(" ")
    }
  }

  switch(type) {
    case SET_NOTIFICATION: 
      return {
        ...state,
        ...payload
      }
    case POST_UPLOAD_SUCCESS: 
    case POST_UPLOAD_FAILURE: 
    case POST_DELETE_SUCCESS: 
    case POST_DELETE_FAILURE: 
    case POST_UPDATE_SUCCESS: 
    case POST_UPDATE_FAILURE: 
    case POST_COMMENT_UPLOAD_SUCCESS:
    case POST_COMMENT_UPLOAD_FAILURE:
    case POST_COMMENT_DELETE_SUCCESS:
    case POST_COMMENT_DELETE_FAILURE:
    case POST_COMMENT_UPDATE_SUCCESS:
    case POST_COMMENT_UPDATE_FAILURE:
      return {
        ...state,
        isOpen: true,
        ...getApiNotification(type)
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isOpen: true,
        variant: 'success',
        message: i18n.t(`registration.${action.payload.successMsg}`)
      }
    case LOGIN_SUCCESS: 
      return { 
        ...state,
        isOpen: true,
        variant: 'success',
        message: i18n.t(`login.${action.payload.successMsg}`)
      }
    case LOGIN_FAILURE:
    case REGISTRATION_FAILURE:
      return {
        ...state,
        variant: 'error',
        ...getRegisterLoginNotification(action)
      }
    case RESET_NOTIFICATION: {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
}

