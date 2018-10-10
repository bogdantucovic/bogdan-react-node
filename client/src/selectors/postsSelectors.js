import { createSelector } from 'reselect';

export const postsSelector = state => state.posts;

export const postsItemsSelector = createSelector(
  postsSelector,
  posts => posts.items
);

export const postsFetchingSelector = createSelector(
  postsSelector,
  posts => posts.isFetching
);

export const postsTotalSelector = createSelector(
  postsSelector,
  posts => posts.total
);

export const postsPageSelector = createSelector(
  postsSelector,
  posts => posts.page
);

export const editablePostSelector = createSelector(
  postsSelector,
  posts => posts.editablePost
);

export const newPostSelector = createSelector(
  postsSelector,
  posts => posts.newPost
);

export const hasImagesSelector = createSelector(
  postsSelector,
  posts => posts.hasImagesOnly
);

