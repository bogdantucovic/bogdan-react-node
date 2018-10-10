import React from "react";
import PropTypes from "prop-types";
import { Card } from "@material-ui/core";
import PostContent from "./PostContent";
import UserCardHeader from "../User/UserCard/UserCardHeader/";

const PostCard = ({ post }) => (
  <Card>
    <UserCardHeader id={post.user.id} title={post.user.name} />
    <PostContent post={post} />
  </Card>
);

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostCard;
