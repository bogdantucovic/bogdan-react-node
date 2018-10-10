import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import EditPostContent from './EditPostContent';
import PostContent from '../PostContent'; 
import UserHeader from '../../User/UserCard/UserCardHeader';
import PostEditMenu from '../PostEditMenu';

import { setPost } from '../../../actions/postActions';

class EditPost extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.isEdit && nextProps.isEdit !== this.props.isEdit) {
      this.props.setPost({ editablePost: this.props.post});
    }
  }

  render() {
    const {
      post,
      editablePost, 
      onChangeFile,
      onChangePostField, 
      isEdit,
      onToggle, 
      onDeletePost,
      onUpadtePost
    } = this.props;

    return(
      <Card>
        <UserHeader hasEdit
          id={post.user.id} 
          title={post.user.name}
          menu={(props) => (
            <PostEditMenu {...props} 
              onDeletePost={onDeletePost}
              onEditPost={onToggle}
            />
          )}
        />
        {
          isEdit 
          ? <EditPostContent
              post={editablePost} 
              onSubmit={onUpadtePost}
              onChangeFile={onChangeFile}
              onChange={onChangePostField} 
              offEditPost={onToggle}
            />
          : <PostContent post={post} />
        }
      </Card>
    )
  }
}

EditPost.propTypes = {
  post: PropTypes.object.isRequired,
  editablePost: PropTypes.object.isRequired,
  onChangePostField: PropTypes.func.isRequired, 
  isEdit: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired, 
  onDeletePost: PropTypes.func.isRequired, 
  onUpadtePost: PropTypes.func.isRequired
}

export default connect(
  null, { setPost } 
)(EditPost);
