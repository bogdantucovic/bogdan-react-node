import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import UserCardHeader from "./UserCardHeader/";

const User = ({ name, email, id }) => (
  <Card>
    <UserCardHeader title={name} id={id} />
    <CardContent>
      <Typography variant="subheading">{email}</Typography>
    </CardContent>
  </Card>
);

export default User;
