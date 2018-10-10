import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';

import MoreVert from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import withStyles from '@material-ui/core/styles/withStyles';
import styles from './UserCardHeader.styles';

const UserHeader = ({ 
  id, 
  title, 
  hasEdit, 
  onCloseMenu,
  setMenuAnchorEl, 
  menuAnchorEl, 
  menu: Menu, 
  classes,
  ...menuProps 
}) => {

  const renderHeaderTitle = () => 
    <Link 
      className={classes.headerLink}
      to={`/users/${id}`} 
    > 
      { title } 
    </Link>;
  
  const renderAvatar = () => 
    <Avatar 
      alt={title} 
      className={classes.avatar}
    >
      { title.charAt(0) }
    </Avatar>

  if (hasEdit) {
    return(
      <Fragment>
        <CardHeader
          title={ renderHeaderTitle() }
          avatar={ renderAvatar() }
          action={
            <IconButton onClick={(e) => {
              setMenuAnchorEl(e);
            }} >
              <MoreVert/>
            </IconButton>
          }
        />
        <Menu {...menuProps}
          menuAnchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onCloseMenu={onCloseMenu}
        />
      </Fragment>
    )
  } else {
    return(
      <CardHeader 
        avatar={ renderAvatar() }
        title={ renderHeaderTitle() } 
      />
    )
  }
}

UserHeader.defaultProps = {
  hasEdit: false,
  title: ''
}

UserHeader.propTypes = {
  hasEdit: PropTypes.bool.isRequired
}

export default withStyles(styles)(UserHeader);