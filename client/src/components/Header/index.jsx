import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import withStyles from '@material-ui/core/styles/withStyles';
import styles from './index.styles';

import TopHeader from './TopHeader';
import Navigation from '../Navigation/';
import Transitions from '../utility/Transitions';

class Header extends Component {
  render() {
    const {  
      user,
      setDialog,
      isAuthenticated,
      onToggle: onToggleMenu,
      isOpenToggle : isOpenMenu,
      windowDimension: {
        windowWidth
      },
      classes,
      ...navigationProps
    } = this.props;

    const isMobileMenu = windowWidth < 400;

    return (
      <header>
        <TopHeader 
          isAuthenticated={isAuthenticated}
          setDialog={setDialog} 
          user={user}
        />
        <Grid direction="column" container >
          <AppBar position="sticky" >
            <Grid container>
              {
                isMobileMenu ? 
                  <React.Fragment>
                    <IconButton 
                      onClick={onToggleMenu} 
                      color="inherit"
                      aria-label="Menu" 
                    >
                      <MenuIcon />
                    </IconButton>
                    <Dialog
                      fullScreen
                      classes={{paper: classes.dialog}}
                      open={isOpenMenu}
                      onClose={onToggleMenu}
                      TransitionComponent={Transitions.slideUp}
                    >
                    <Navigation {...navigationProps}
                      isAuthenticated={isAuthenticated}  
                      onToggleMenu={onToggleMenu} 
                    />
                    </Dialog>
                  </React.Fragment>
                  : <Navigation {...navigationProps}
                      isAuthenticated={isAuthenticated} 
                      onToggleMenu={onToggleMenu} 
                    />
                }
              </Grid>
            </AppBar>
        </Grid>
      </header>
    )
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string
  }),
  isAuthenticated: PropTypes.bool.isRequired,
  isOpenToggle: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  windowDimension: PropTypes.shape({
    windowWidth: PropTypes.number.isRequired,
    windowHeight: PropTypes.number.isRequired
  })
};

export default withStyles(styles)(Header);

