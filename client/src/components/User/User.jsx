import React from "react";
import Grid from "@material-ui/core/Grid";
import UserPosts from "./UserPosts";
import UserCard from "./UserCard/";

const User = ({ user, currentUser }) => (
  <Grid container spacing={16}>
    <Grid xs={12} item>
      <UserCard {...currentUser} />
    </Grid>

    <Grid xs={12} item>
      <UserPosts user={user} />
    </Grid>
  </Grid>
);

export default User;
