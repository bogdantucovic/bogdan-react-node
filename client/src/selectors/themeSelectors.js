import { createSelector } from 'reselect';

export const themeSelector = state => state.theme;

export const currentThemeSelector = createSelector(
  themeSelector,
  theme => theme.currentTheme
);

