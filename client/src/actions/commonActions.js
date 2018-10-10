import {
  CHANGE_PAGE,
  SET_THEME
} from '../constants/commonConstants';

export const changePage = (resource, page) => ({
  type: CHANGE_PAGE,
  resource,
  page
});

export const setTheme = (currentTheme) => ({
  type: SET_THEME,
  currentTheme
});















