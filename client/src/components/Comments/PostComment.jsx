import * as React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import withStyle from '@material-ui/core/styles/withStyles';

import { authUserIdSelector } from '../../selectors/authSelectors'; 
import { postCommentDeleteRequest, setPostComment } from '../../actions/postActions';
import { togglePostCommentUploadMode } from '../../actions/postCommentsActions';

const styles = theme => {
  return({
    comment: {
      position: 'relative',
      backgroundColor: theme.palette.grey[100],
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      borderRadius: theme.shape.borderRadius
    },
    commentHeader: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    icons: {
      position: 'absolute',
      top: 0,
      right: 0
    },
    icon: {
      fontSize: theme.typography.caption.fontSize
    },
    link: {
      paddingRight: theme.spacing.unit
    }
  });
};

const PostComment = ({ 
  message, 
  user_name, 
  post_id,
  comment_id,
  user_id, 
  classes, 
  currentUserId,
  setPostComment,
  postCommentDeleteRequest,
  togglePostCommentUploadMode 
}) => {

  const handleDeleteCommnet = () => {
    postCommentDeleteRequest(post_id, comment_id);
  }

  const handleChangeMode = () => {
    setPostComment({ message, comment_id, post_id })
    togglePostCommentUploadMode(false);
  }

  return(
    <article 
      className={classes.comment} 
    >
      <div className={classes.commentHeader} >
        <Typography variant='caption' >
          <Link className={classes.link}
            to={`/users/${user_id}`} 
          > 
            { user_name }
          </Link>
        </Typography>
        { user_id == currentUserId &&
          <React.Fragment>
            <span 
              className={classes.icons} 
            >
              <IconButton
                onClick={handleChangeMode}
                color="primary"
                variant="text"
                size="small"
              >
                <EditIcon className={classes.icon}/>
              </IconButton>
              <IconButton
                onClick={handleDeleteCommnet}
                color="secondary"
                variant="text"
                size="small"
              >
                <DeleteIcon className={classes.icon}/>
              </IconButton>
            </span>
          </React.Fragment>
        }
      </div>
      <Typography 
        variant='caption'
      >
        { message }
      </Typography>
    </article>
  ) 
}

const mapStateToProps = state => ({
  currentUserId: authUserIdSelector(state)
});

export default connect(
  mapStateToProps, 
  { postCommentDeleteRequest, togglePostCommentUploadMode, setPostComment })(
  withStyle(styles)(PostComment)
);



