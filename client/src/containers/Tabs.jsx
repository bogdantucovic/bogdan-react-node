import React, { Component, Fragment } from 'react';
import { Tab, Tabs } from '@material-ui/core';

export default class TabsContainer extends Component {
  state = {
    tabsValue: 0
  }

  onChange = (e, tabsValue) => {
    this.setState({ 
      tabsValue 
    });
  }

  render() {
    const { tabsValue } = this.state;
    const { component: Component, tabs, ...rest } = this.props;

    return(
      <Fragment>
        <Tabs {...rest}
          value={tabsValue}
          onChange={this.onChange} 
        >
          {
            tabs.map((label, key) => (
              <Tab label={label} key={key.toString()} />
            ))
          }
        </Tabs> 
        <div style={{marginTop: '16px'}} >
          <Component tabsValue={tabsValue} />
        </div>
      </Fragment>
    )
  }
}

