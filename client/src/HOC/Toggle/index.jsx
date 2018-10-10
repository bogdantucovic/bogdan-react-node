import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ToggleHOC = (ToggleInner) => {
  class ToggleParent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: this.props.isOpen
      }

      this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
      this.setState(prevState => ({ open: !prevState.open }));
    }

    render() {
      const { open } = this.state;
      const { isOpen, ...customProps } = this.props;

      return(
        <ToggleInner {...customProps}
          isOpenToggle={open}
          onToggle={this.onToggle}
        />
      )
    }
  }

  ToggleParent.defaultProps = {
    isOpen: false
  }

  ToggleParent.propTypes = {
    isOpen: PropTypes.bool
  }

  return ToggleParent;
}

export default ToggleHOC;