import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newPostSelector } from '../selectors/postsSelectors';
import { postUploadRequest, setPost } from '../actions/postActions';
import { uploadRequest } from '../actions/uploadActions';
import CreatePostPresentation from '../components/Post/CreatePost';

class CreatePost extends Component { 
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { 
      newPost: { message, img },
      postUploadRequest, 
      user: { id:userId }, 
    } = this.props;

    postUploadRequest({ message, userId, img });
  }

  handleChangePostField = (e) => {
    const { name, value } = e.target;

    const newPost = {
      ...this.props.newPost,
      [name]: value
    }

    this.props.setPost({ newPost });
  }

  handleChangeFile = (e) => {
    const file = new FormData();
    
    file.append('file', e.target.files[0]);

    this.props.uploadRequest(file, 'posts', 'create');
  }

  render() {
    const { newPost } = this.props;
    return(
      <CreatePostPresentation
        post={newPost}
        onSubmit={this.handleSubmit} 
        onChangeFile={this.handleChangeFile}
        onChangePostField={this.handleChangePostField}
      />
    )
  }
}

const mapStateToProps = state => ({
  newPost: newPostSelector(state)
})

const mapDispatchToProps = {
  postUploadRequest,
  setPost,
  uploadRequest
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CreatePost);

