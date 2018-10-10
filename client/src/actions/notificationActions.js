import {
  SET_NOTIFICATION,
  RESET_NOTIFICATION
} from '../constants/notificationConstrants';

export const setNotification = (payload) => ({
  type: SET_NOTIFICATION,
  payload
});

export const resetNotification = () => ({
  type: RESET_NOTIFICATION
});




