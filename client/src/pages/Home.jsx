import * as React from 'react';
import withRouter from 'react-router-dom/withRouter';


class Home extends React.Component {
  
  componentDidMount() {
    /**
    *  
    * define some content and remove this
    * 
    */
    this.props.history.replace('/posts');
  }

  render() {
    return null;
  }
}

export default withRouter(Home);