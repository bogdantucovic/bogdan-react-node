import React, { Fragment } from 'react';
import { CircularProgress, LinearProgress } from '@material-ui/core';

const Loader = ({ variant, circular, linear }) => (
  <Fragment>
    {
      variant === 'circular' 
        ? <CircularProgress {...circular} />
        : <LinearProgress {...linear} />
    }
  </Fragment>
)

Loader.defaultProps = {
  variant: 'circular',
  linear: {},
  circular: {
    size: '50px'
  }
}

export default Loader;