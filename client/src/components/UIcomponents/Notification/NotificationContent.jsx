import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SnackbarContent  from '@material-ui/core/SnackbarContent';
import withStyles from '@material-ui/core/styles/withStyles';
import CheckCircle  from '@material-ui/icons/CheckCircle';
import Error from '@material-ui/icons/Error';
import Info from '@material-ui/icons/Info';

import styles from './NotificationContent.styles';

const variantIcon = {
  success: CheckCircle,
  error: Error,
  info: Info
};

const NotificationContent = ({ classes, message, variant }) => {
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      message={
        <span className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
            {message}
        </span>
      }
    />
  )
}

NotificationContent.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'error', 'info']).isRequired,
};

export default withStyles(styles)(NotificationContent);