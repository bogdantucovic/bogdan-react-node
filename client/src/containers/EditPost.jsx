import React, { Component } from "react";
import { connect } from "react-redux";

import { editablePostSelector } from "../selectors/postsSelectors";
import { uploadRequest } from "../actions/uploadActions";
import {
  postDeleteRequest,
  postUpdateRequest,
  setPost
} from "../actions/postActions";
import EditPostPresentation from "../components/Post/EditPost/";
import ToggleHOC from "../HOC/Toggle/";

class EditPost extends Component {
  onUpadtePost = () => {
    const { onToggle, postUpdateRequest, editablePost } = this.props;

    postUpdateRequest(editablePost.post_id, { ...editablePost });
    onToggle();
  };

  onDeletePost = () => {
    const {
      postDeleteRequest,
      post: { post_id }
    } = this.props;

    postDeleteRequest(post_id);
  };

  onChange = e => {
    const { name, value } = e.target;
    const editablePost = {
      [name]: value
    };

    this.props.setPost({ editablePost });
  };

  handleChangeFile = e => {
    const file = new FormData();

    file.append("file", e.target.files[0]);

    this.props.uploadRequest(file, "posts", "update");
  };

  render() {
    const { isOpenToggle, onToggle, post, editablePost } = this.props;
    return (
      <EditPostPresentation
        post={post}
        editablePost={editablePost}
        isEdit={isOpenToggle}
        onToggle={onToggle}
        onDeletePost={this.onDeletePost}
        onUpadtePost={this.onUpadtePost}
        onChangeFile={this.handleChangeFile}
        onChangePostField={this.onChange}
      />
    );
  }
}

const EditPostWithToggleHOC = ToggleHOC(EditPost);

const mapStateToProps = state => ({
  editablePost: editablePostSelector(state)
});

const mapDispatchToProps = {
  postDeleteRequest,
  postUpdateRequest,
  uploadRequest,
  setPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostWithToggleHOC);
