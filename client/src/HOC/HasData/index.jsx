import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './index.styles';

const HasDataHOC = (ComponentWithData) => {
  const HasData = ({ hasData, error, classes, t, i18n, tReady, ...componentProps }) => {
    const { isData, noDatai18nKey } = hasData;
    
    if (isData) {
      return(
        <ComponentWithData {...componentProps} />
      )
    } else {
      return(
        <Paper className={classes.root} elevation={0} square >
          <Typography component="p" variant="subheading" color="error" >
            { error ? t('layout.fetchError') : t(noDatai18nKey) }
          </Typography>
        </Paper>
      )
    }
  }
  
  HasData.propTypes = {
    hasData: PropTypes.shape({
      isData: PropTypes.bool.isRequired,
      noDatai18nKey: PropTypes.string.isRequired
    })
  }
  
  return translate()(withStyles(styles)(HasData));
}

export default HasDataHOC;