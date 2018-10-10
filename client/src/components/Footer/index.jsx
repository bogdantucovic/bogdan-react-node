import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './index.style';
import StyledLink from '../UIcomponents/StyledLink';

const Footer = ({ classes }) => (
  <footer 
    className={classes.footer}
  >
    <Grid container
      justify="space-around" 
      alignItems="center"
    >
      <StyledLink
        href="https://www.linkedin.com/in/btucovic/" 
        target="_blank"
        rel="author"
      >
        Linkedin
      </StyledLink>
      <Typography variant="caption" >
        Developed by Bogdan Tucovic
      </Typography>
      <StyledLink
        href="https://github.com/bogdantucovic" 
        target="_blank"
        rel="author"
      >
        GitHub
      </StyledLink>
    </Grid> 
  </footer>
)

export default withStyles(styles)(Footer);