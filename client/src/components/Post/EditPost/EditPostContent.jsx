import React, { Fragment } from 'react';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import CreateEditPostContent from '../CreateEditPostContent';

const EditPostContent = ({ t, post, onSubmit, offEditPost, onChange, onChangeFile }) => (
  <CreateEditPostContent 
    onSubmit={onSubmit}
    onChange={onChange}
    onChangeFile={onChangeFile}
    uploadAction='update'
    post={post}
  >
    <Fragment>
      <Button 
        variant="raised" 
        color="primary"
        onClick={onSubmit} 
        disabled={!post.message}
        >
        { t('post.action.update') }
      </Button>
      <Button  
        onClick={offEditPost}
        variant="raised" 
        color="secondary"
      >
        { t('post.action.cancel') }
      </Button>
    </Fragment>
  </CreateEditPostContent>
)

export default translate()(EditPostContent);