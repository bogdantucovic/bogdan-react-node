import {
  SET_DIALOG,
  RESET_DIALOG
} from '../constants/dialogConstanst';

export const setDialog = (payload) => ({
  type: SET_DIALOG,
  payload
});

export const resetDialog = () => ({
  type: RESET_DIALOG
});