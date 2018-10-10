import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import getTheme from './utlis/getTheme';
import { I18nextProvider } from 'react-i18next';
import i18n from "./i18n/";

import { themeSelector } from './selectors/themeSelectors';
import { dialogSelector } from './selectors/dialogSelectors';
import { notificationSelector } from './selectors/notificationSelectors';

import { logout } from './actions/loginActions';
import { resetDialog, setDialog } from './actions/dialogActions';
import { resetNotification } from './actions/notificationActions';

import Header from './components/Header/';
import Footer from './components/Footer';
import ConfirmationDialog from './components/UIcomponents/ConfirmationDialog';
import Notification from './components/UIcomponents/Notification/';
import ToggleHOC from './HOC/Toggle/';

const HeaderWithToggle = ToggleHOC(Header);

class Layout extends Component {
  state = {
    windowDimension: {}
  }
  
  componentWillMount() {
    this.updateWindowDimension();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimension);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimension);
  }

  updateWindowDimension = () => {
    const windowDimension = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }

    this.setState({ windowDimension });
  }

  render() {
    const { windowDimension } = this.state;
    const {
      user,
      logout,
      theme,
      mainComponent: MainComponent, 
      isAuthenticated, 
      resetNotification,
      notification,
      dialog,
      setDialog,
      resetDialog
    } = this.props;

    const dialogHandleConfirm = () => {
      switch(dialog.confirmAction) {
        case 'logout':
          logout();
      }
    }

    const customTheme = getTheme(theme, dialog.variant, notification.variant);
    
    return(
      <MuiThemeProvider theme={customTheme}>
         <I18nextProvider i18n={ i18n }>
          <div className="Layout" >
            <HeaderWithToggle
              user={user}
              setDialog={setDialog}
              windowDimension={windowDimension}
              isAuthenticated={isAuthenticated}
            />
            <main>
              <MainComponent user={user}/>
            </main>
            <Footer/>
            <Notification
              open={notification.isOpen}
              variant={notification.variant}
              message={notification.message}
              onClose={resetNotification} 
              autoHideDuration={notification.autoHideDuration}
            />
            <ConfirmationDialog
              open={dialog.isOpen}
              onClose={resetDialog}
              contentText={dialog.contentText}
              onConfirm={dialogHandleConfirm}
              transitionType={dialog.transitionType}
            />
          </div>
        </I18nextProvider>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: themeSelector(state),
  notification: notificationSelector(state),
  dialog: dialogSelector(state)
})

const mapDispatchToProps = {
  resetNotification,
  setDialog,
  resetDialog,
  logout
}
  
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Layout);

