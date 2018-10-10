import React, { Component } from 'react';
import UserCardHeader from './UserCardHeader'; 

class UserCardHeaderContainer extends Component {
  state = {
    menuAnchorEl: null
  }

  setMenuAnchorEl = (e) => {
    this.setState({ menuAnchorEl: e.target });
  }

  handleCloseMenu = () => {
    this.setState({ menuAnchorEl: null });
  }

  render() {
    const { menuAnchorEl } = this.state;
    return(
      <UserCardHeader {...this.props}
        menuAnchorEl={menuAnchorEl} 
        setMenuAnchorEl={this.setMenuAnchorEl}
        onCloseMenu={this.handleCloseMenu}
      />
    )
  }
}

export default UserCardHeaderContainer;