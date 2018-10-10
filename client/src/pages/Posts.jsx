import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import MetaData from '../components/MetaData/';
import PostListContainer from '../containers/PostList';

const Posts = ({ user }) => (
  <Fragment> 
    <MetaData/>
    <PostListContainer user={user} />
  </Fragment>
)

Posts.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string
  })
}

export default Posts;