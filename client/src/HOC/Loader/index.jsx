import React from 'react';
import Grid from '@material-ui/core/Grid';

import LoaderComponent from '../../components/UIcomponents/Loader';

const LoaderHOC = (LoadedComponent) => {
  const Loader = ({ loader, ...rest }) => {
    const { isLoading } = loader;

    if (isLoading) {
      return(
        <Grid justify="center" container>
          <LoaderComponent />
        </Grid>
      )
    } else {
      return(
        <LoadedComponent {...rest} />
      )
    }
  }
  
  return Loader;
}

export default LoaderHOC;