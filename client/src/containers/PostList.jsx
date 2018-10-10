import React from "react";
import { connect } from "react-redux";

import {
  postsItemsSelector,
  postsFetchingSelector,
  postsTotalSelector,
  postsPageSelector,
  hasImagesSelector
} from "../selectors/postsSelectors";
import { changePage } from "../actions/commonActions";
import { postFetchStart } from "../actions/postActions";
import ListHOC from "../HOC/List/";
import LoaderHOC from "../HOC/Loader/";
import HasDataHOC from "../HOC/HasData/";
import PostListPresentation from "../components/Post/PostList";

const PostListWithData = HasDataHOC(PostListPresentation);
const PostList = LoaderHOC(PostListWithData);
const List = ListHOC(PostList);

const PostListContainer = ({
  user,
  items,
  isFetching,
  postFetchStart,
  changePage,
  ...otherProps
}) => (
  <List
    {...otherProps}
    user={user}
    items={items}
    fetchStart={postFetchStart}
    onChangePage={changePage}
    hasData={{
      noDatai18nKey: "post.noData",
      isData: items.length > 0
    }}
    loader={{
      isLoading: isFetching
    }}
  />
);

PostListContainer.defaultProps = {
  limit: 2
};

const mapStateTootherProps = state => ({
  items: postsItemsSelector(state),
  isFetching: postsFetchingSelector(state),
  total: postsTotalSelector(state),
  page: postsPageSelector(state),
  hasImagesOnly: hasImagesSelector(state)
});

const mapDispatchTootherProps = {
  postFetchStart,
  changePage
};

export default connect(
  mapStateTootherProps,
  mapDispatchTootherProps
)(PostListContainer);
