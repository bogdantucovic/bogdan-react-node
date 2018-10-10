import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

import { Card, Button, CardHeader } from '@material-ui/core';
import CreateEditPostContent from './CreateEditPostContent';

const CreatePost = ({   
  t,
  post,
  onSubmit,
  onChangeFile,
  onChangePostField
}) => (
  <Card raised >
    <CardHeader title={t('post.create')} />
    <CreateEditPostContent 
      onChangeFile={onChangeFile}
      onChange={onChangePostField}
      uploadAction='create'
      post={post}
    >
      <Button 
        variant="raised" 
        color="primary"
        onClick={onSubmit} 
        disabled={!post.message}
      >
        { t('post.action.upload') }
      </Button>
    </CreateEditPostContent>
  </Card>
)
  
CreatePost.propTypes = {
  onChangePostField: PropTypes.func.isRequired,
  onChangeFile: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

export default  translate()(CreatePost);