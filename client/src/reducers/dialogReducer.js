import {
  SET_DIALOG,
  RESET_DIALOG
} from '../constants/dialogConstanst';

const initialState = {
  isOpen: false,
  variant: 'info',
  contentText: '',
  confirmAction: '',
  transitionType: 'zoom'
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case SET_DIALOG: 
      return {
        ...state,
        ...payload
      }
    case RESET_DIALOG:
      return {
        ...initialState
      }
    default:
      return state;
  }
}