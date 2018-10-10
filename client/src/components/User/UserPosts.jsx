import React from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import PostListContainer from "../../containers/PostList";
import CreatePostContainer from "../../containers/CreatePost";

const UserPosts = ({ user, match }) => (
  <Grid spacing={16} container>
    <Grid xs={12} item>
      {match.params.userid == user.id && <CreatePostContainer user={user} />}
    </Grid>
    <Grid xs={12} item>
      <PostListContainer user={user} />
    </Grid>
  </Grid>
);

export default withRouter(UserPosts);
