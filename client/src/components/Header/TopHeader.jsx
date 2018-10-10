import React from 'react';
import Grid from '@material-ui/core/Grid';

import Languages from '../Languages/';
import UserMenu from '../../components/User/UserMenu';

export default ({isAuthenticated, ...rest}) => (
  <Grid 
    container
    justify='space-between'
    alignItems='center'  
  >
    <Languages/>
    { isAuthenticated 
      &&  <UserMenu {...rest} />
    }
  </Grid>
)

