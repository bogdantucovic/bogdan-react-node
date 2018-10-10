import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';

import NotificationContent from './NotificationContent';

const Notification = ({
  variant,
  message, 
  ...snackBarProps
}) => (
  <Snackbar {...snackBarProps} >
    <NotificationContent
      variant={variant}
      message={message}
    />
  </Snackbar>
)

Notification.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  autoHideDuration: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(['error', 'info', 'success']).isRequired
}

export default Notification;