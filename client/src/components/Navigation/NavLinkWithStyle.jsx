import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  link: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing.unit,
    fontSize: theme.typography.body1.fontSize,
    fontFamily: theme.typography.body1.fontFamily,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: theme.typography.body1.lineHeight,
  },
  activeLink: {
    backgroundColor: theme.palette.secondary.main
  }
});

const NavLinkWithStyle = ({ children, classes, ...navLinkProps }) => (
  <NavLink {...navLinkProps} 
    className={classes.link} 
    activeClassName={classNames(classes.link, classes.activeLink)} 
  >
    { children }
  </NavLink>
)

export default withStyles(styles)(NavLinkWithStyle)