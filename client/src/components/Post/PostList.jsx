import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import Pagination from "../UIcomponents/Pagination";
import EditPost from "../../containers/EditPost";
import PostCard from "./PostCard";
import PostImages from "./PostImages";

const PostList = ({ items, user, hasImagesOnly, ...paginationProps }) => (
  <Grid spacing={16} alignItems="center" container>
    {hasImagesOnly ? (
      <PostImages posts={items} />
    ) : (
      <Fragment>
        {items.map(post => (
          <Fragment key={post.post_id}>
            <Grid xs={12} item>
              <div
                style={{
                  maxWidth: "650px",
                  margin: "auto",
                  display: "block"
                }}
              >
                {user.id === post.user.id ? (
                  <EditPost userId={user.id} post={post} />
                ) : (
                  <PostCard post={post} />
                )}
              </div>
            </Grid>
          </Fragment>
        ))}
      </Fragment>
    )}
    <Grid xs={12} item>
      <Pagination {...paginationProps} listCategory="posts" />
    </Grid>
  </Grid>
);

PostList.propTypes = {
  hasImagesOnly: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string
  })
};

export default PostList;
