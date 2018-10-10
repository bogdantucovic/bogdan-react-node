import { themes, defaultTheme } from '../config';
import {
  SET_THEME
} from '../constants/commonConstants';


const initialState = {
  currentTheme: defaultTheme,
  ...themes[defaultTheme]
}

export default (state = initialState, {type, currentTheme}) => {
  switch(type) {
    case SET_THEME:
      return {
        currentTheme,
        ...themes[currentTheme]
      }
    default:
      return state;
  }
}


