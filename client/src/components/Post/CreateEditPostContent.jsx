import React from 'react';
import { 
  CardContent,
  CardActions,
  TextField,
  Grid
} from '@material-ui/core';
import ImageUpload from '../ImageUpload/';

const CreateEditPostContent = ({ 
  onChange,
  onChangeFile,
  uploadAction,
  post, 
  children
}) => (
  <CardContent>
    <TextField
      name="message"
      value={post.message || ''}
      onChange={onChange}
      autoFocus
      fullWidth
      multiline
      required
    />
    <ImageUpload 
      fileName={post.img || ''}
      resource='posts'
      uploadAction={uploadAction}
      onChangeFile={onChangeFile} 
    />
    <CardActions>
      <Grid justify="flex-end" container>
        { children }
      </Grid>
    </CardActions>
  </CardContent>
)

export default CreateEditPostContent;