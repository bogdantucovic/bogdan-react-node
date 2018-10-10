import * as React from "react";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Collapse
} from "@material-ui/core";
import Comment from "@material-ui/icons/Comment";

import PostCommnets from "../../components/Comments/PostComments";
import ToggleHOC from "../../HOC/Toggle";

const PostContent = ({
  post: { img, message, comments, post_id, user: postUser },
  isOpenToggle: isComments,
  onToggle: onToggleComments
}) => (
  <React.Fragment>
    <img
      src={`/assets/imgs/${img}`}
      alt={message}
      style={{
        width: "100%",
        maxHeight: "300px"
      }}
    />

    <CardContent>
      <Typography variant="subheading">{message}</Typography>
    </CardContent>
    <CardActions>
      <Button
        onClick={onToggleComments}
        color={isComments ? "secondary" : "primary"}
      >
        <Comment />
      </Button>
    </CardActions>
    <Collapse in={isComments}>
      <PostCommnets postUser={postUser} postId={post_id} comments={comments} />
    </Collapse>
  </React.Fragment>
);

const PostContentWithToggle = ToggleHOC(PostContent);

export default PostContentWithToggle;
