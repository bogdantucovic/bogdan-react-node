import React from 'react';
import { translate } from 'react-i18next';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreateEditComment from '../../containers/CreateEditComment';
import PostComment from './PostComment';
import ToggleHOC from '../../HOC/Toggle/';

const PostComments = ({ 
  t,
  postUser, 
  postId, 
  comments = [], 
  initialNumComments,
  isOpenToggle: isShowAllComments, 
  onToggle: handleShowAllComments 
}) => {
  const totalComments = comments.length;
  const startInd = isShowAllComments ? 0 : totalComments - initialNumComments;

  const isShowMoreBtn = !isShowAllComments && totalComments > initialNumComments;
    
  return(
    <CardContent>
      <CreateEditComment 
        postId={postId} 
        postUser={postUser} 
      />
      {
         isShowMoreBtn &&
          <Button
            onClick={handleShowAllComments }
            style={{fontSize: '0.70rem', textTransform: 'lowercase'}}
            color='primary'
            size='small'
            variant='text'
          >
           { t('post.showMoreComments') }
          </Button>
      }
      {
        comments.slice(startInd, comments.length).map((comment, key) => (
          <React.Fragment key={key.toString()} >
            <PostComment {...comment} />
          </React.Fragment>
        ))
      }
    </CardContent>
  ) 
}

PostComments.defaultProps = {
  initialNumComments: 2
}

export default translate()(ToggleHOC(PostComments));

