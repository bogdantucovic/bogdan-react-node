import * as React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

import {
  postCommentUploadRequest,
  setPostComment,
  postCommentUpdateRequest
} from "../actions/postActions";

class CreateEditComment extends React.Component {
  handleChangeCommentMsg = e => {
    const message = e.target.value;

    const currentComment = {
      post_id: this.props.postId,
      message
    };

    this.props.setPostComment(currentComment);
  };

  handleFocusMsgInput = () => {
    const {
      postId: post_id,
      setPostComment,
      postComments: { isEnabledCreating }
    } = this.props;

    if (isEnabledCreating) {
      setPostComment({ post_id, message: "" });
    } else {
      setPostComment({ post_id });
    }
  };

  handleUploadComment = () => {
    const {
      postCommentUploadRequest,
      auth: { user },
      postComments: { currentComment, isEnabledCreating },
      postCommentUpdateRequest
    } = this.props;
    const { id: userId, name: userName } = user;
    const { post_id, comment_id, message } = currentComment;

    if (isEnabledCreating) {
      postCommentUploadRequest(post_id, {
        ...currentComment,
        userId,
        userName
      });
    } else {
      postCommentUpdateRequest(post_id, comment_id, { message });
    }
  };

  render() {
    let {
      postComments: {
        currentComment: { message, post_id: commentPostId }
      },
      postId
    } = this.props;

    message = commentPostId == postId ? message : "";
    const isDisabledAddBtn = typeof message === "undefined" || message === "";

    return (
      <Grid container justify="space-between" alignItems="center">
        <Grid xs={10} item>
          <TextField
            onChange={this.handleChangeCommentMsg}
            onFocus={this.handleFocusMsgInput}
            value={message}
            fullWidth
            multiline
            margin="normal"
            placeholder="New comment"
          />
        </Grid>
        <Grid xs={2} item>
          <IconButton
            onClick={this.handleUploadComment}
            variant="raised"
            color="primary"
            size="small"
            disabled={isDisabledAddBtn}
          >
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    postComments: state.postComments
  };
};

export default connect(
  mapStateToProps,
  { postCommentUploadRequest, setPostComment, postCommentUpdateRequest }
)(CreateEditComment);
