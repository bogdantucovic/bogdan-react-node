import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  primary: {
    ...theme.typography.body1,
    color: theme.palette.primary.main
  },
  secondary: {
    ...theme.typography.body1,
    color: theme.palette.secondary.main
  }
});

const StyledLink = ({ 
  classes, 
  children, 
  variant = 'primary' , 
  ...linkProps 
}) => (
  <a {...linkProps}
    className={classes[variant]}
  >
    { children }
  </a>
)

StyledLink.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  href: PropTypes.string.isRequired
}

export default withStyles(styles)(StyledLink);